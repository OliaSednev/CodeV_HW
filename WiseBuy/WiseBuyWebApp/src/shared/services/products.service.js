var ProductsService = (function () {
    function ProductsService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    ProductsService.prototype.getProducts = function () {
        return this.$http.get("api/Products/")
            .then(function (data) {
            return data.data;
        }, function (error) {
        });
    };
    ProductsService.$inject = ['$http', '$q'];
    return ProductsService;
}());
//# sourceMappingURL=products.service.js.map