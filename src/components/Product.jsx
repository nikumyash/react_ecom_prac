import { StarIcon } from '@heroicons/react/20/solid'
import classNames from '../utils/classNames';
import { CartDispatchs } from "./CartContextProvider";
import { useContext } from 'react';
// eslint-disable-next-line react/prop-types
function Product({product}){
  const CartDispatch = useContext(CartDispatchs)
  return (
      <div className="group relative border-2 border-gray-100 p-2 mx-auto w-80 md:w-60">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.img}
            alt={product.title}
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 border-t-2 pt-2 flex justify-between flex-col relative">
          <div>
            <h3 className="text-lg text-gray-700 break-words">
              <a href={product.img}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <div className='text-sm'><span className="text-lg font-medium text-gray-900 top-2 right-2">${product.newPrice} </span>
          MRP:<span className='line-through'>{product.prevPrice}</span>
          </div>
          <div className='absolute bottom-0 right-0 cursor-pointer hover:scale-125' onClick={(e)=>{e.preventDefault();CartDispatch({type:'ADD_ITEM',payload:{title:product.title,img:product.img,price:product.newPrice,quantity:1}})}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{product.rating} out of 5 stars</p>
            <a href={product.img} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
              {product.rating} reviews
            </a>
          </div>
        </div>
      </div>
    )
}

export default Product;