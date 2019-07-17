import { Injectable } from '@angular/core';
import { ProductResponse } from '../models/product-response';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    public response: ProductResponse = new ProductResponse();
    public currentProduct: Product;

    constructor() {
        this.response.data = this.getInventory();
        this.response.totalCount = this.response.data.length;
        this.response.lastAddedName = "";
    }

    public addProductToInventory(productName: string, productPrice: number) {

        this.response.data.push({ id: this.response.data.length + 1, name: productName, price: productPrice });
        this.response.lastAddedName = productName;
        this.response.totalCount++;
    }

    public deleteProductFromInventory(itemId: number) {
        let removeIndex: number = this.response.data.map(x => x.id).indexOf(itemId);
        var deletedProduct: Product[] = this.response.data.splice(removeIndex, 1);
        this.response.lastDeletedName = deletedProduct[0].name;
        this.response.totalCount--;
    }

    private getInventory() {
        return [
            {
                id: 1,
                name: "klavye",
                price: 100
            },
            {
                id: 2,
                name: "monitör",
                price: 500
            }
        ];
    }

    public assignCurrentProduct(itemId: number): void {
        this.currentProduct = this.response.data.find(x => x.id == itemId);
    }

    public getCurrentProductDetail(): Product {
        return this.currentProduct;
    }

    public increaseCurrentProductPriceBy10percent() {
        this.currentProduct.price += this.currentProduct.price / 10;
    }

    public decreaseCurrentProductPriceBy10percent() {
        this.currentProduct.price -= this.currentProduct.price / 10;
    }

    public deleteCurrentProduct() {
        this.deleteProductFromInventory(this.currentProduct.id);
    }
}
