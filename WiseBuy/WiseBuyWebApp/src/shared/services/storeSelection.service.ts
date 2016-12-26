class StoreSelectionService {

    static $inject: string[] = ['chainsService', 'storesService'];
    storeSelectionList: IStoreSelectionItem[];

    constructor(private chainsService: IChainsService,
        private storesService: IStoresService) {
        this.storeSelectionList =
            [{ selectedStore: null, selectedChain: null , cart: {prices: [], totalPrice: 0}},
            { selectedStore: null, selectedChain: null, cart: {prices: [], totalPrice: 0 }}];
    }

    RemoveStore(storeIndex) {
        this.storeSelectionList.splice(storeIndex, 1);
    }

    AddStore() {
        this.storeSelectionList.push({ selectedStore: null, selectedChain: null, cart: { prices: [], totalPrice: 0 } });

    }

    AddPrice(selectedProduct: IProduct) {

        for (let i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            const storePrices = this.storeSelectionList[i].selectedStore.prices;
            for (let k = 0; k < storePrices.length; k++) {

                if (storePrices[k].product.productId === selectedProduct.productId) {
                    storePrices[k].product.amount = selectedProduct.amount;
                    this.storeSelectionList[i].cart.prices.push(storePrices[k]);
      
                }
            }
            if (this.storeSelectionList[i].cart.prices.length === 0) {
                this.storeSelectionList[i].cart.prices.push({ productPrice: 0, product: selectedProduct, quantity: 0, unitquantity: "" });
            }
        }    
    }


    RemovePrice(selectedProduct: IProduct) {

        for (let i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            const storePrices = this.storeSelectionList[i].cart.prices;
            for (let j = 0; j < storePrices.length; j++) {

                if (selectedProduct.productId === storePrices[j].product.productId) {
                    storePrices.splice(j, 1);
                }
            }
        }
    }

    StoreCount(): number {
        let count = 0;
        for (let i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            count++;
        }
        return count;
    }

    RemoveList(){
        for (let i = 0; i < this.storeSelectionList.length; i++) {
            while (this.storeSelectionList[i].cart.prices.length>0) {
                this.storeSelectionList[i].cart.prices.pop();
            }
        }
    }

    CalcTotalPrice() {
        for (let i = 0; i < this.storeSelectionList.length; i++) {
            let totalPriceOfStore = 0;
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            const cartPrices = this.storeSelectionList[i].cart.prices;
            for (let j = 0; j < cartPrices.length; j++) {
                totalPriceOfStore += cartPrices[j].productPrice * cartPrices[j].product.amount;
            }
            this.storeSelectionList[i].cart.totalPrice = totalPriceOfStore;
        }
    }

    IsPriceLowest(price: IPrice): Boolean {
        let lowest = price.productPrice;
        let productId = price.product.productId;

        for (let i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            const cartPrices = this.storeSelectionList[i].cart.prices;
            for (let j = 0; j < cartPrices.length; j++) {
                if (cartPrices[j].product.productId === productId) {
                    if (cartPrices[j].productPrice < lowest) {
                        lowest = cartPrices[j].productPrice;
                    }
                }
            }
        }
        return price.productPrice === lowest;
    }

    IsPriceHighest(price: IPrice): Boolean {
        let high = price.productPrice;
        let productId = price.product.productId;

        for (let i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            const cartPrices = this.storeSelectionList[i].cart.prices;
            for (let j = 0; j < cartPrices.length; j++) {
                if (cartPrices[j].product.productId === productId) {
                    if (cartPrices[j].productPrice > high) {
                        high = cartPrices[j].productPrice;
                    }
                }
            }
        }
        return price.productPrice === high;
    }

    IsStoreCheap(cart: ICart): Boolean {

        let lowest = cart.totalPrice;

        for (let i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            if (this.storeSelectionList[i].cart.totalPrice < lowest) {
                lowest = this.storeSelectionList[i].cart.totalPrice;
            }
        }
        return cart.totalPrice === lowest;
    }
    
}