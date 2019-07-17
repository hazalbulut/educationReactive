import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductFormComponent } from './product-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProductFormComponent
    ],
    exports: [
        ProductFormComponent
    ]
})
export class ProductFormModule { }
