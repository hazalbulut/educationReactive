import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductResponse } from '../../models/product-response';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductFormModel } from '../../models/product-form';
import { Product } from '../../models/product';
import { ProductValue } from 'src/app/models/product-value';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public title: string = "education";
    public products: ProductResponse;
    public bestProduct: Product;

    constructor(private productService: ProductService) { }

    public ngOnInit() {

        this.products = this.productService.response;
        this.bestProduct = this.products.data[0];
    }

    public deleteProductHome(id: number) {
        this.productService.deleteProductFromInventory(id);
    }

    public addProductHome(data:ProductValue) {
        if(!data.productValid) {
            return;
        }
        console.log(event);

        this.productService.addProductToInventory(data.productData.name, data.productData.price);
        // this.productForm.controls["name"].patchValue("");
        // this.productForm.controls["price"].patchValue(0);
    }


}
