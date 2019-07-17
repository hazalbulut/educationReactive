import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductFormModel } from 'src/app/models/product-form';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'product-form',
    styleUrls: ['./product-form.component.css'],
    templateUrl: './product-form.component.html'
})


export class ProductFormComponent implements OnInit {
    public productForm: FormGroup;
    constructor(private fb: FormBuilder) { }
    @Output() public addProductAction = new EventEmitter<{ productData: ProductFormModel, productValid: boolean }>();

    public ngOnInit(): void {
        this.productForm = this.fb.group({
            name: ['laptop', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            price: ['50', Validators.max(1000)]
        });

    }

    public addProductPF(productData: ProductFormModel, productValid: boolean) {
        this.addProductAction.emit({ productData, productValid });
    }

    public cleanPrice() {
        this.productForm.controls.price.patchValue(null);
    }

}
