import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { RouterModule } from '@angular/router';
import { ProductItemModule } from 'src/app/components/product-item/product-item.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ProductItemModule,
        ProductDetailRoutingModule
    ],
    declarations: [
        ProductDetailComponent
    ],
    providers: [],
})
export class ProductDetailModule { }
