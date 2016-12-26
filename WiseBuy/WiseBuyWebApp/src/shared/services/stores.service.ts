class StoresService {
    static $inject: string[] = ['$http', '$q'];
    public stores: IStore[];

    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
    }

    getStores(): ng.IPromise<IStore[]> {
        return this.$http.get("api/stores/")
            .then(data => {
                return data.data as IStore[];
            },
            (error) => {
            });
    }
}