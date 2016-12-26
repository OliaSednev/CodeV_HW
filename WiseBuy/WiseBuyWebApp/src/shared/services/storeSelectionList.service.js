var StoreSelectionListService = (function () {
    function StoreSelectionListService(chainsService, storesService) {
        this.chainsService = chainsService;
        this.storesService = storesService;
        this.storeSelectionList =
            [{ selectedStore: null, selectedChain: null, cart: { prices: [], totalPrice: 0 } },
                { selectedStore: null, selectedChain: null, cart: { prices: [], totalPrice: 0 } }];
    }
    StoreSelectionListService.prototype.RemoveStore = function (storeIndex) {
        this.storeSelectionList.splice(storeIndex, 1);
    };
    StoreSelectionListService.prototype.AddStore = function () {
        this.storeSelectionList.push({ selectedStore: null, selectedChain: null, cart: { prices: [], totalPrice: 0 } });
    };
    StoreSelectionListService.prototype.AddPrice = function (selectedProduct) {
        for (var i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            var storePrices = this.storeSelectionList[i].selectedStore.prices;
            for (var k = 0; k < storePrices.length; k++) {
                if (storePrices[k].product.productId === selectedProduct.productId) {
                    storePrices[k].product.amount = selectedProduct.amount;
                    this.storeSelectionList[i].cart.prices.push(storePrices[k]);
                }
            }
            if (this.storeSelectionList[i].cart.prices.length === 0) {
                this.storeSelectionList[i].cart.prices.push({ productPrice: 0, product: selectedProduct, quantity: 0, unitquantity: "" });
            }
        }
    };
    StoreSelectionListService.prototype.RemovePrice = function (selectedProduct) {
        for (var i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            var storePrices = this.storeSelectionList[i].cart.prices;
            for (var j = 0; j < storePrices.length; j++) {
                if (selectedProduct.productId === storePrices[j].product.productId) {
                    storePrices.splice(j, 1);
                }
            }
        }
    };
    StoreSelectionListService.prototype.StoreCount = function () {
        var count = 0;
        for (var i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            count++;
        }
        return count;
    };
    StoreSelectionListService.prototype.RemoveList = function () {
        for (var i = 0; i < this.storeSelectionList.length; i++) {
            while (this.storeSelectionList[i].cart.prices.length > 0) {
                this.storeSelectionList[i].cart.prices.pop();
            }
        }
    };
    StoreSelectionListService.prototype.CalcTotalPrice = function () {
        for (var i = 0; i < this.storeSelectionList.length; i++) {
            var totalPriceOfStore = 0;
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            var cartPrices = this.storeSelectionList[i].cart.prices;
            for (var j = 0; j < cartPrices.length; j++) {
                totalPriceOfStore += cartPrices[j].productPrice * cartPrices[j].product.amount;
            }
            this.storeSelectionList[i].cart.totalPrice = totalPriceOfStore;
        }
    };
    StoreSelectionListService.prototype.IsPriceLowest = function (price) {
        var lowest = price.productPrice;
        var productId = price.product.productId;
        for (var i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            var cartPrices = this.storeSelectionList[i].cart.prices;
            for (var j = 0; j < cartPrices.length; j++) {
                if (cartPrices[j].product.productId === productId) {
                    if (cartPrices[j].productPrice < lowest) {
                        lowest = cartPrices[j].productPrice;
                    }
                }
            }
        }
        return price.productPrice === lowest;
    };
    StoreSelectionListService.prototype.IsPriceHighest = function (price) {
        var high = price.productPrice;
        var productId = price.product.productId;
        for (var i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            var cartPrices = this.storeSelectionList[i].cart.prices;
            for (var j = 0; j < cartPrices.length; j++) {
                if (cartPrices[j].product.productId === productId) {
                    if (cartPrices[j].productPrice > high) {
                        high = cartPrices[j].productPrice;
                    }
                }
            }
        }
        return price.productPrice === high;
    };
    StoreSelectionListService.prototype.IsStoreCheap = function (cart) {
        var lowest = cart.totalPrice;
        for (var i = 0; i < this.storeSelectionList.length; i++) {
            if (!this.storeSelectionList[i].selectedStore) {
                continue;
            }
            if (this.storeSelectionList[i].cart.totalPrice < lowest) {
                lowest = this.storeSelectionList[i].cart.totalPrice;
            }
        }
        return cart.totalPrice === lowest;
    };
    StoreSelectionListService.$inject = ['chainsService', 'storesService'];
    return StoreSelectionListService;
}());
//# sourceMappingURL=storeSelectionList.service.js.map