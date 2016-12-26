class CartsListService {

    static $inject: string[] = ['selectedProductsListService', 'storeSelectionListService'];

    shoppingCartList: IShoppingCart[];

    constructor(
        private selectedProductsListService: SelectedProductsListService,
        private storeSelectionListService: StoreSelectionListService) {
        this.shoppingCartList = [];
    }

    StoreShoppingCarts() {
        for (let i = 0; i < this.storeSelectionListService.storeSelectionList.length; i++) {
            let totalPrice = 0;
            let cartPrices: IPrice[];

            for (let j = 0; j < this.selectedProductsListService.selectedList.length; j++) {

                let store = this.storeSelectionListService.storeSelectionList[i].selectedStore;
                for (let k = 0; k < store.prices.length; k++) {
                    if (this.selectedProductsListService.selectedList[j].ProductId === store.prices[k].product.ProductId) {
                        cartPrices.push(store.prices[k]);
                        totalPrice += (store.prices[k].productprice * store.prices[k].product.amount);
                    }
                    //else {///////////.............////////////}
                    //}
                }
                this.shoppingCartList.push({
                    chain: this.storeSelectionListService.storeSelectionList[i].selectedChain,
                    store: this.storeSelectionListService.storeSelectionList[i].selectedStore,
                    prices: cartPrices,
                    totalPrice: totalPrice
                });
            }
        }
    }
}