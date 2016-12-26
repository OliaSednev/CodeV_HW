var app = angular.module("app", ['ngRoute'])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "src/components/main-app/HomePage/home.component.html"
        });
        $routeProvider.when("/compareCarts", {
            templateUrl: "src/components/main-app/CompareCarts/compareCarts.component.html"
        });
        $routeProvider.otherwise("/home");
    }])
    .component("mainApp", {
    templateUrl: "src/components/main-app/main-app.component.html",
    controller: MainCtrl
})
    .component("cvHeader", {
    templateUrl: "src/components/main-app/header-component/header.component.html",
    bindings: {
        numberOfProducts: "<"
    },
    controller: HeaderCtrl
})
    .component("cvCompareBar", {
    templateUrl: "src/components/main-app/compare-bar-component/compare-bar.component.html",
    controller: CompareBarCtrl
})
    .component("cvStoresCompare", {
    templateUrl: "src/components/main-app/compare-bar-component/stores-compare-component/stores-compare.component.html",
    bindings: {
        storeSelectionItem: "<"
    },
    controller: StoresCompareCtrl
})
    .component("cvStoresCompareItem", {
    templateUrl: "src/components/main-app/compare-bar-component/stores-compare-component/stores-compare-item-component/stores-compare-item.component.html",
    controller: StoresCompareItemCtrl,
    bindings: {
        index: "<"
    }
})
    .component("cvProducts", {
    templateUrl: "src/components/main-app/products-component/products.component.html",
    controller: ProductsCtrl
})
    .component("cvProductSearch", {
    templateUrl: "src/components/main-app/products-component/product-search-component/product-search.component.html",
    controller: ProductSearchCtrl
})
    .component("cvProductSearchItem", {
    templateUrl: "src/components/main-app/products-component/product-search-component/product-search-item-component/product-search-item.component.html",
    controller: ProductSearchItemCtrl,
    bindings: {
        product: "<"
    }
})
    .component("cvSelectedProducts", {
    templateUrl: "src/components/main-app/products-component/selected-products-component/selected-products.component.html",
    controller: SelectedProductsCtrl
})
    .component("cvSelectedProductItem", {
    templateUrl: "src/components/main-app/products-component/selected-products-component/selected-product-item-component/selected-product-item.component.html",
    controller: SelectedProductItemCtrl,
    bindings: {
        product: "<"
    }
})
    .component("cvCartsComparison", {
    templateUrl: "src/components/main-app/carts-comparison-component/carts-comparison.component.html",
    controller: CartsComparisonCtrl
})
    .component("cvCartsComparisonItem", {
    templateUrl: "src/components/main-app/carts-comparison-component/carts-comparison-item-component/carts-comparison-item.component.html",
    controller: CartsComparisonItemCtrl,
    bindings: {
        storeSelectionItem: "<"
    }
})
    .service("chainsService", ChainsService)
    .service("productsService", ProductsService)
    .service("selectedProductsService", SelectedProductsService)
    .service("storesService", StoresService)
    .service("storeSelectionService", StoreSelectionService);
//# sourceMappingURL=app.js.map