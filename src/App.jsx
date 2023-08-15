import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import {ProductsContextProvider} from './components/ProductsContextProvider'
import { CartContextProvider } from './components/CartContextProvider'

function App() {
  return (<>
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
    
    </>
  )
}
  
export default App
