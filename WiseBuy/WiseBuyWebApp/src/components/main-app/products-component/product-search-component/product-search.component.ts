class ProductSearchCtrl {
    static $inject: string[] = ['storeSelectionService', 'selectedProductsService', '$location'];
    productSearch: string;
    over: boolean;
    focus: boolean;

    constructor(private storeSelectionService: StoreSelectionService,
                private selectedProductsService: SelectedProductsService,
                private $location: ng.ILocationService) {

        this.over = false;
        this.focus = false;
        this.productSearch = "";
    }

    compareCarts() {
        let count = 0;
        this.storeSelectionService.RemoveList();

        for (let i = 0; i < this.selectedProductsService.selectedList.length; i++) {
            if (this.selectedProductsService.selectedList[i].amount > 0) {
                this.storeSelectionService.AddPrice(this.selectedProductsService.selectedList[i]);
                count++;
            }
            if (this.storeSelectionService.StoreCount() > 1 && count > 0) {
                this.storeSelectionService.CalcTotalPrice();
                this.$location.path("/compareCarts");
            }
        }      
    }
}