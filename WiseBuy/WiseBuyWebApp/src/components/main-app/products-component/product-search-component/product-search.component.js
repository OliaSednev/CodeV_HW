var ProductSearchCtrl = (function () {
    function ProductSearchCtrl(storeSelectionService, selectedProductsService, $location) {
        this.storeSelectionService = storeSelectionService;
        this.selectedProductsService = selectedProductsService;
        this.$location = $location;
        this.over = false;
        this.focus = false;
        this.productSearch = "";
    }
    ProductSearchCtrl.prototype.compareCarts = function () {
        var count = 0;
        this.storeSelectionService.RemoveList();
        for (var i = 0; i < this.selectedProductsService.selectedList.length; i++) {
            if (this.selectedProductsService.selectedList[i].amount > 0) {
                this.storeSelectionService.AddPrice(this.selectedProductsService.selectedList[i]);
                count++;
            }
            if (this.storeSelectionService.StoreCount() > 1 && count > 0) {
                this.storeSelectionService.CalcTotalPrice();
                this.$location.path("/compareCarts");
            }
        }
    };
    ProductSearchCtrl.$inject = ['storeSelectionService', 'selectedProductsService', '$location'];
    return ProductSearchCtrl;
}());
//# sourceMappingURL=product-search.component.js.map