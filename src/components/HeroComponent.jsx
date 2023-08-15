import {Link} from "react-router-dom"

function HeroComponent() {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row px-8'>
        <div className='flex flex-col flex-0.4 h-36 sm:h-auto items-center justify-center'>
            <h1 className="text-5xl md:text-7xl lg:text-9xl text-center items-center">SALE!</h1>  
            <Link to="/shop" className="px-4 py-3 border-4 mt-6 rounded-md bg-[#57beb0] border-[#056B5C]">Shop Now</Link>  
        </div>
        <div className='flex-0.6'>
            <img className="object-contain" src="/src/assets/71VaQ+V6XnL._AC_UY695_.jpg" />
        </div>
    </div>
  )
}

export default HeroComponent