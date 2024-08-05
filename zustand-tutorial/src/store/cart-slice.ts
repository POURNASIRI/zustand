import { StateCreator } from "zustand";
import { Product } from "@/types/product";
import { CartProduct } from "@/types/cartProduct";

type CartState = {
    products : CartProduct[]
    total:number
}


type CartActions = {
    addProduct: (product: Product) => void;
	removeProduct: (productId: string) => void;
	incQty: (productId: string) => void;
	decQty: (productId: string) => void;
	getProductById: (productId: string) => CartProduct
     | undefined;
	setTotal: (total: number) => void;
	reset: () => void;
}


export type CartSlice = CartState & CartActions;

const initialState: CartState = {
	products: [],
	total: 0,
};
export const createCartSlice:StateCreator<CartSlice,[['zustand/immer',never]],[],CartSlice> = (
    set,get)=>({
    ...initialState,
    incQty:(productId)=>set((state)=>{
        const FoundProduct = state.products.find(product=>product.id === productId)

        if(FoundProduct){
            FoundProduct.qty += 1;
        }
    }),
    decQty:(productId)=>set((state)=>{
        const FoundIndex = state.products.findIndex(product=>product.id === productId)
        if(FoundIndex !== -1){
            if(state.products[FoundIndex].qty ===1 ){
                state.products.splice(FoundIndex,1)
            }else{
                state.products[FoundIndex].qty -= 1
            }
        }
    }),
    addProduct: (product) =>
		set((state) => {
			state.products.push({ ...product, qty: 1 });
		}),
	removeProduct: (productId) =>
		set((state) => {
			state.products = state.products.filter(
				(product) => product.id !== productId
			);
		}),
	getProductById: (productId) =>
		get().products.find((product) => product.id === productId),
	setTotal: (total) =>
		set((state) => {
			state.total = total;
		}),

	reset: () => set(() => initialState),
   
})