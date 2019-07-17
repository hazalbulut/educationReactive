import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'product-detail/:id', component: ProductDetailComponent, pathMatch: 'full' }
        ])
    ]
})
export class ProductDetailRoutingModule { }
