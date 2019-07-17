import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from './product-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ProductItemComponent
    ],
    exports: [
        ProductItemComponent
    ]
})
export class ProductItemModule { }
