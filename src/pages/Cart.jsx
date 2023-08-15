import { useContext } from "react"
import { CartContext } from "../components/CartContextProvider"
import CartItem from "../components/CartItem";

function Cart() {
  const {items} = useContext(CartContext);
  return (<>
    <div >Shopping Cart</div>
    <CartItem/>
  </>
  )
}

export default Cart