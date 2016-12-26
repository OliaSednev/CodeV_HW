class CartsComparisonItemCtrl {
    static $inject: string[] = ['storeSelectionService'];

    storeSelectionItem: IStoreSelectionItem;

    constructor(
        private storeSelectionService: StoreSelectionService) {
    }

}


