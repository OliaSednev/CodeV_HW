var SelectedProductsService = (function () {
    function SelectedProductsService(chainsService, productsService, storeSelectionService) {
        this.chainsService = chainsService;
        this.productsService = productsService;
        this.storeSelectionService = storeSelectionService;
        this.numberOfProducts = 0;
        this.selectedList = [];
    }
    SelectedProductsService.prototype.AddProduct = function (product) {
        var isNewProduct = true;
        for (var i = 0; i < this.selectedList.length; i++) {
            if (product.productId === this.selectedList[i].productId)
                isNewProduct = false;
        }
        if (isNewProduct) {
            this.selectedList.push(product);
            this.numberOfProducts = this.selectedList.length;
        }
    };
    SelectedProductsService.prototype.RemoveProduct = function (product) {
        var productIndex = this.selectedList.indexOf(product);
        this.selectedList.splice(productIndex, 1);
        this.numberOfProducts = this.selectedList.length;
    };
    SelectedProductsService.$inject = ['chainsService', 'productsService', 'storeSelectionService'];
    return SelectedProductsService;
}());
//# sourceMappingURL=selectedProducts.service.js.map