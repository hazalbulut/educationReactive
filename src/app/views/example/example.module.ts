import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ExampleRoutingModule
    ],
    declarations: [
        ExampleComponent
    ],
    providers: [],
})
export class ExampleModule { }
