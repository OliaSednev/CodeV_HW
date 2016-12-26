var ProductSearchItemCtrl = (function () {
    function ProductSearchItemCtrl(selectedProductsService) {
        this.selectedProductsService = selectedProductsService;
    }
    ProductSearchItemCtrl.prototype.addProduct = function () {
        this.selectedProductsService.AddProduct(this.product);
    };
    ProductSearchItemCtrl.$inject = ['selectedProductsService'];
    return ProductSearchItemCtrl;
}());
//# sourceMappingURL=product-search-item.component.js.map