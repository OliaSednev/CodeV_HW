class ProductsService {
    static $inject: string[] = ['$http', '$q'];
    public products: IProduct[];

    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
    }

    getProducts(): ng.IPromise<IProduct[]> {
        return this.$http.get("api/Products/")
            .then(data => {
                return data.data as IProduct[];
            },
            (error) => {
            });
    }

}