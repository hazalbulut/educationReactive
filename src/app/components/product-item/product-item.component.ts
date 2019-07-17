import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'product-item',
    styleUrls: ['./product-item.component.css'],
    templateUrl: './product-item.component.html'
})

export class ProductItemComponent implements OnInit {
    @Input() public product: Product;
    @Input() public showItem: boolean = true;
    @Input() public showDeleteButton: boolean = true;
    @Input() public index: number;

    @Output() public deleteProductAction = new EventEmitter<number>();

    public ngOnInit(): void {
        //
    }

    public deleteProductPI(productId: number): void {
        this.deleteProductAction.emit(productId);
    }
}
