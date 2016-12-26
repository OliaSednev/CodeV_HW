class SelectedProductsCtrl{

    static $inject: string[] = ['selectedProductsService'];
    product: IProduct;
    constructor(private selectedProductsService: SelectedProductsService) {
    }
}