import Products from "../components/Products"
import Category from "../components/Category"

function Home() {
  return (<>
    <div className="flex flex-row mx-auto sm:px-6 sm:py-8 lg:max-w-[1400px] lg:px-8">
      <Category className="flex-0.2"/>
      <div className="flex-0.8 pl-3 mx-auto border-gray-100 md:border-l-2">
        <Products/>
      </div>
    </div>
  </>
  )
}

export default Home