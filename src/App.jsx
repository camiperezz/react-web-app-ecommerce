import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import PageNotFound from './components/PageNotFound'
import CheckoutContainer from './components/CheckoutContainer'
import { BrowserRouter, Routes, Route } from "react-router"
import CartContainer from './components/CartContainer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer text="Comming soon..."/>} />
        <Route path="category/:nameCategory" element={<ItemListContainer />} />
        <Route path="item/:idProduct" element={<ItemDetailContainer />} />
        <Route path="cart" element={<CartContainer />} />
        <Route path="checkout" element={<CheckoutContainer />} />
        <Route path="*" element={<PageNotFound/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
