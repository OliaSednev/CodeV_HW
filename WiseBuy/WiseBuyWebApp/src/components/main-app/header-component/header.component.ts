class HeaderCtrl {

    static $inject: string[] = ['selectedProductsService'];
    numberOfProducts: number;

    constructor(private selectedProductsService: SelectedProductsService) {      
    }

}