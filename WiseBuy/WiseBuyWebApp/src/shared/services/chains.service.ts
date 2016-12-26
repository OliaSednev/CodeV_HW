class ChainsService {
    static $inject: string[] = ['$http', '$q'];
    public chains: IChain[];

    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
        this.getChains();
    }
    getChains(): ng.IPromise<IChain[]> {
        var defer = this.$q.defer<IChain[]>();

        if (this.chains) {
            defer.resolve(this.chains);
        }
        else {
            this.$http.get("api/chains/")
                .then(data => {
                    this.chains = data.data as IChain[];
                    defer.resolve(this.chains);
                },
                (error) => {
                    defer.reject(error);
                });
        }
        return defer.promise;
    }   
}