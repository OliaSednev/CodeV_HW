
interface IProduct {
    productId: number;
    name: string;
    description: string;
    
    amount: number;
}

interface IChain {
    chainId: number;
    name: string;
    stores: IStore[];
}

interface IPrice {
    product: IProduct;
    productPrice: number;
    unitquantity: string;
    quantity: number;

}

interface IStore {
    storeId: number;
    name: string;
    city: string;
    address: string;
    prices: IPrice[];
}

interface IStoreSelectionItem {
    selectedChain: IChain;
    selectedStore: IStore;
    cart: ICart;
}

interface ICart {
    prices: IPrice[];
    totalPrice: number;
}

//interface IShoppingCart{
//    chain: IChain;
//    store: IStore;
//    prices: IPrice[];
//    totalPrice: number;
//}


interface IProductsService {
    getProducts();
}

interface IChainsService {
    getChains();
}

interface IStoresService {
    getStores();
}