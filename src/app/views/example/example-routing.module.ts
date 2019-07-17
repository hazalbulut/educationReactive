import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './example.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'example', component: ExampleComponent, pathMatch: 'full' }
        ])
    ]
})
export class ExampleRoutingModule { }
