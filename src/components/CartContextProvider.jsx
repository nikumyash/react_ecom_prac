import { createContext, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";
const initalCart = {
    items:[],
    numOfItems:0,
    subTotal:0,
}
const CartContext = createContext(initalCart);
const CartDispatchs = createContext(null);
// eslint-disable-next-line react/prop-types
function CartContextProvider({children}) {
    const [Cart,CartDispatch] = useReducer(CartReducer,initalCart);
    return (
        <CartContext.Provider value={Cart}>
            <CartDispatchs.Provider value={CartDispatch}>
            {children}
            </CartDispatchs.Provider>    
        </CartContext.Provider>
    )
}

export {CartContextProvider,CartContext,CartDispatchs};