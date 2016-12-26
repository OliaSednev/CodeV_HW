class ProductSearchItemCtrl {

    static $inject: string[] = ['selectedProductsService'];
    product: IProduct;

    constructor(private selectedProductsService: SelectedProductsService) {
    }

    addProduct() {
        this.selectedProductsService.AddProduct(this.product);
    }
}