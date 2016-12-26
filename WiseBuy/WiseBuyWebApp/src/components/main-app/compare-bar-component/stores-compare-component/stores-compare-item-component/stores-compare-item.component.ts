class StoresCompareItemCtrl {

    static $inject: string[] = ['storeSelectionService', 'chainsService'];

    index: number;
    store: IStore;
    chain: IChain;
    onStoreChanged: Function;

    constructor(
        private storeSelectionService: StoreSelectionService,
        private chainsService: IChainsService) {
    }

    storeChanged() {
        if (this.onStoreChanged) {
            this.onStoreChanged();

        }  
    }
}