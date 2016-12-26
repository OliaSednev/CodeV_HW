var ChainsService = (function () {
    function ChainsService($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.getChains();
    }
    ChainsService.prototype.getChains = function () {
        var _this = this;
        var defer = this.$q.defer();
        if (this.chains) {
            defer.resolve(this.chains);
        }
        else {
            this.$http.get("api/chains/")
                .then(function (data) {
                _this.chains = data.data;
                defer.resolve(_this.chains);
            }, function (error) {
                defer.reject(error);
            });
        }
        return defer.promise;
    };
    ChainsService.$inject = ['$http', '$q'];
    return ChainsService;
}());
//# sourceMappingURL=chains.service.js.map