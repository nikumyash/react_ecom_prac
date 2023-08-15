import {createContext, useEffect, useState} from 'react'

import data from "./../data/data"

const ProductsContext = createContext(null);
const FilterContext = createContext("");

// eslint-disable-next-line react/prop-types
function ProductsContextProvider({children}) { 
    const [filteredData,setFD] = useState(data);
    const [search,setSearch] = useState("");
    const [category,setCategory] = useState("All");
    const [brands,setBrands] = useState([]);

    useEffect(()=>{
        console.log(brands);
        setFD(data.filter((elem)=>{if((category==='All' || category === elem.category) && (elem.title.toLowerCase().includes(search.toLowerCase()) && (brands.length===0 || brands.includes(elem.company.toLowerCase()))))return true;}));
    },[search,category,brands])
    return (
        <ProductsContext.Provider value={{FilteredProducts:filteredData}}> 
            <FilterContext.Provider value={{searchFilter:setSearch,categoryFilter:setCategory,brandsFilter:setBrands}}>
                {children}
            </FilterContext.Provider>
        </ProductsContext.Provider>
    )
}

export {ProductsContextProvider,ProductsContext,FilterContext}