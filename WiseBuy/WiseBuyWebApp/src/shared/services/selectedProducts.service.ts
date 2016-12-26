class SelectedProductsService {

    static $inject: string[] = ['chainsService', 'productsService', 'storeSelectionService'];
    selectedList: IProduct[];
    numberOfProducts: number;
    index: number;


    constructor(
        private chainsService: IChainsService,
        private productsService: IProductsService,
        private storeSelectionService: StoreSelectionService) {
        this.numberOfProducts = 0;
        this.selectedList = [];
    }
    
    AddProduct(product: IProduct) {
        let isNewProduct = true;
        for (var i = 0; i < this.selectedList.length; i++) {
            if (product.productId === this.selectedList[i].productId)
                isNewProduct = false;
        }
        if (isNewProduct) {
            this.selectedList.push(product);
            this.numberOfProducts = this.selectedList.length; 
        }          
    }

    RemoveProduct(product: IProduct) {
        let productIndex = this.selectedList.indexOf(product);
        this.selectedList.splice(productIndex, 1);
        this.numberOfProducts = this.selectedList.length;
    }
}