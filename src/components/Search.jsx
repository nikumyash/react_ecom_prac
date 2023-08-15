import { useContext } from "react"
import { FilterContext } from "./ProductsContextProvider"


function Search() {
  const {searchFilter} = useContext(FilterContext);
    return (
    <div className='flex w-96 bg-gray-200 rounded-md items-center '>
        <input type="text" placeholder='Search items..' onChange={(e)=>{searchFilter(e.target.value)}} className='bg-gray-100 border-none rounded-tl-md rounded-bl-md p-2 px-4 flex-1'/>
        <button className='hover:cursor-pointer px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
    </div>
  )
}

export default Search