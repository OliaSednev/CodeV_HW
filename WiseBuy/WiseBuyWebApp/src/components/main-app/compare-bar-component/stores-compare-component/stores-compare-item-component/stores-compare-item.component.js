var StoresCompareItemCtrl = (function () {
    function StoresCompareItemCtrl(storeSelectionService, chainsService) {
        this.storeSelectionService = storeSelectionService;
        this.chainsService = chainsService;
    }
    StoresCompareItemCtrl.prototype.storeChanged = function () {
        if (this.onStoreChanged) {
            this.onStoreChanged();
        }
    };
    StoresCompareItemCtrl.$inject = ['storeSelectionService', 'chainsService'];
    return StoresCompareItemCtrl;
}());
//# sourceMappingURL=stores-compare-item.component.js.map