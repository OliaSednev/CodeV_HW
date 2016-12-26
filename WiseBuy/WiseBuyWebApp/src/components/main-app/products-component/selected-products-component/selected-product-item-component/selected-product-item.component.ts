class SelectedProductItemCtrl {

    static $inject: string[] = ['selectedProductsService'];
    product: IProduct;
    onChange: Function;

    constructor(private selectedProductsService: SelectedProductsService) {
    }

    removeProduct() {
        this.selectedProductsService.RemoveProduct(this.product);
    }

    amountChanged() {
        if (this.onChange) {
            this.onChange();
        }
    }
}