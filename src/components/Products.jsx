import { useContext } from "react";
import Product from "./Product"
import {ProductsContext} from "./ProductsContextProvider"

function Products() {
    
    const {FilteredProducts} = useContext(ProductsContext);
    return (
        <div className="mx-auto px-4 sm:px-6 py-8 lg:max-w-[1400px] lg:px-4">
            <h2 className="text-xl mx-auto font-bold tracking-tight text-gray-900">Products</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {FilteredProducts.map((product)=><Product product={product} key={product.title +Math.random()}/>)}
            </div>
        </div>
  )
}

export default Products;