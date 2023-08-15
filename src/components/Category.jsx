import { useContext, useEffect, useState } from "react"
import { FilterContext } from "./ProductsContextProvider"


function Category({brand}) {
 
  const {categoryFilter,brandsFilter} = useContext(FilterContext);
  const [curCat,setCat] = useState("All");
  const [brands,setBrands] = useState([]);

  useEffect(()=>categoryFilter(curCat),[curCat]);

  useEffect(()=>{if(brand)brandsFilter([brand.toLowerCase()]);else brandsFilter(brands);},[brands]);

  function brandsetter(e){
    { 
      if(e.target.checked){setBrands([...brands,e.target.id.toLowerCase()])}
      else{
        let x = structuredClone(brands);
        x.splice(brands.indexOf(e.target.id.toLowerCase()),1);
        setBrands(x);
      }
    }
  }  

  return (
    <div className=" lg:mx-auto ml-2 hidden md:block py-8">
      <h1 className="text-lg mx-auto font-bold tracking-tight text-gray-900">Category</h1>
        <div>
        <input type="checkbox" id="All" value="All" checked={curCat==='All'} onChange={(e)=>{setCat(e.target.value);}}></input>
        <label htmlFor="All" className="text-md mx-auto font-bold tracking-tight text-gray-500"> All</label>
        </div>
        <div>
        <input type="checkbox" id="Sneaker"  value="sneakers" checked={curCat==='sneakers'} onChange={(e)=>{setCat(e.target.value)}}></input>
        <label htmlFor="Sneaker" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Sneaker</label>
        </div>
        <div>
        <input type="checkbox" id="Flat" value="flats" checked={curCat==='flats'} onChange={(e)=>{setCat(e.target.value)}}></input>
        <label htmlFor="Flat" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Flat</label>
        </div>
        <div>
        <input type="checkbox" id="Sandal" value="sandals" checked={curCat==='sandals'}  onChange={(e)=>{setCat(e.target.value)}}></input>
        <label htmlFor="Sandal" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Sandal</label>
        </div>
        <div>
        <input type="checkbox" id="Heels" value="heels" checked={curCat==='heels'} onChange={(e)=>{setCat(e.target.value)}}></input>
        <label htmlFor="Heels" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Heels</label>
        </div>
        <br/>

      {brand==null && <><h1 className="text-lg mx-auto font-bold tracking-tight text-gray-900">Brands</h1>
        <div>
        <input type="checkbox" id="Nike" onChange={brandsetter}></input>
        <label htmlFor="Nike" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Nike</label>
        </div>
        <div>
        <input type="checkbox" id="Adidas" onChange={brandsetter}></input>
        <label htmlFor="Adidas" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Adidas</label>
        </div>
        <div>
        <input type="checkbox" id="Puma" onChange={brandsetter}></input>
        <label htmlFor="Puma" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Puma</label>
        </div>
        <div>
        <input type="checkbox" id="Vans" onChange={brandsetter}></input>
        <label htmlFor="Vans" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Vans</label>
        </div>
        <br/></>}
      </div>
  )
}

export default Category


// <h1 className="text-lg mx-auto font-bold tracking-tight text-gray-900">Price</h1>
// <div>
// <input type="checkbox" id="AllPrice"></input>
// <label htmlFor="AllPrice" className="text-md mx-auto font-bold tracking-tight text-gray-500"> All</label>
// </div>
// <div>
// <input type="checkbox" id="0-50"></input>
// <label htmlFor="0-50" className="text-md mx-auto font-bold tracking-tight text-gray-500"> $0 to $50</label>
// </div>
// <div>
// <input type="checkbox" id="50-100"></input>
// <label htmlFor="50-100" className="text-md mx-auto font-bold tracking-tight text-gray-500"> $50 to $100</label>
// </div>
// <div>
// <input type="checkbox" id="100-150"></input>
// <label htmlFor="100-150" className="text-md mx-auto font-bold tracking-tight text-gray-500"> $100 to $150</label>
// </div>
// <div>
// <input type="checkbox" id="150+"></input>
// <label htmlFor="150+" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Over $150</label>
// </div>
// <br/>
// <h1 className="text-lg mx-auto font-bold tracking-tight text-gray-900">Color</h1>
// <div>
// <input type="checkbox" id="AllColor"></input>
// <label htmlFor="AllColor" className="text-md mx-auto font-bold tracking-tight text-gray-500"> All</label>
// </div>
// <div>
// <input type="checkbox" id="Black" className="bg-black checked:bg-black"></input>
// <label htmlFor="Black" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Black</label>
// </div>
// <div>
// <input type="checkbox" id="Blue" className="bg-blue-500 checked:bg-blue-500"></input>
// <label htmlFor="Blue" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Blue</label>
// </div>
// <div>
// <input type="checkbox" id="Red" className="bg-red-500 checked:bg-red-500"></input>
// <label htmlFor="Red" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Red</label>
// </div>
// <div>
// <input type="checkbox" id="Green" className="bg-green-500 checked:bg-green-500"></input>
// <label htmlFor="Green" className="text-md mx-auto font-bold tracking-tight text-gray-500"> Green</label>
// </div>
// <div>
// <input type="checkbox" id="White" className="bg-white"></input>
// <label htmlFor="White" className="text-md mx-auto font-bold tracking-tight text-gray-500"> White</label>
// </div> 