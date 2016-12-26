var StoresService = (function () {
    function StoresService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    StoresService.prototype.getStores = function () {
        return this.$http.get("api/stores/")
            .then(function (data) {
            return data.data;
        }, function (error) {
        });
    };
    StoresService.$inject = ['$http', '$q'];
    return StoresService;
}());
//# sourceMappingURL=stores.service.js.map