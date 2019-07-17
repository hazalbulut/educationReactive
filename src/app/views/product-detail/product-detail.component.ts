import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    public id: string;
    public product: Product;
    public bestProduct: Product;

    constructor(private location: Location, private route: ActivatedRoute, private productService: ProductService) { }

    public ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        let id = +this.id;
        this.productService.assignCurrentProduct(id);
        this.product = this.productService.currentProduct;
        this.bestProduct = this.product;
    }

    public deleteProduct() {
        this.productService.deleteCurrentProduct();
        alert("Seçtiğiniz ürün silindi");
        this.location.back();
    }

    public increasePrice(){
        this.productService.increaseCurrentProductPriceBy10percent();
    }

    public decreasePrice(){
        this.productService.decreaseCurrentProductPriceBy10percent();
    }

}
