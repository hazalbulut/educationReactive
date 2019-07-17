import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductResponse } from '../../models/product-response';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductFormModel } from '../../models/product-form';
import { Product } from '../../models/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public productForm: FormGroup;
    public title: string = "education";
    public products: ProductResponse;
    public bestProduct: Product;

    constructor(private productService: ProductService, private fb: FormBuilder) { }

    public ngOnInit() {
        this.productForm = this.fb.group({
            name: ['laptop', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            price: ['50', Validators.max(1000)]
        });
        this.products = this.productService.response;
        this.bestProduct = this.products.data[0];
    }

    public deleteProductHome(id: number) {
        this.productService.deleteProductFromInventory(id);
    }

    public onSubmit(model: ProductFormModel, isValid: boolean) {
        if(!isValid) {
            return;
        }
        this.productService.addProductToInventory(model.name, model.price);
        // this.productForm.controls["name"].patchValue("");
        // this.productForm.controls["price"].patchValue(0);
    }

    public cleanPrice() {
        this.productForm.controls.price.patchValue(null);
    }
}
