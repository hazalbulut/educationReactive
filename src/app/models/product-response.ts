import { Product } from './product';

export class ProductResponse {
    public data: Product[];
    public totalCount: number;
    public lastAddedName: string;
    public lastDeletedName: string;
}
