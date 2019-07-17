import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductItemModule } from 'src/app/components/product-item/product-item.module';
import { ProductFormModule } from 'src/app/components/product-form/product-form.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HomeRoutingModule,
        ProductItemModule,
        ProductFormModule,
        ReactiveFormsModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule { }
