var SelectedProductItemCtrl = (function () {
    function SelectedProductItemCtrl(selectedProductsService) {
        this.selectedProductsService = selectedProductsService;
    }
    SelectedProductItemCtrl.prototype.removeProduct = function () {
        this.selectedProductsService.RemoveProduct(this.product);
    };
    SelectedProductItemCtrl.prototype.amountChanged = function () {
        if (this.onChange) {
            this.onChange();
        }
    };
    SelectedProductItemCtrl.$inject = ['selectedProductsService'];
    return SelectedProductItemCtrl;
}());
//# sourceMappingURL=selected-product-item.component.js.map