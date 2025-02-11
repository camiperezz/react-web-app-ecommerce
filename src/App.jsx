import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import PageNotFound from './components/PageNotFound'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <BrowserRouter> {/* componente que define el componente */}
      <Navbar /> {/* los componentes que se muestran en todas las rutas se agregan como hijos directos de BrowserRouter y antes de Routes */}
      <Routes> {/* componente contenedor de rutas */}
        {/* <Route> componente de la ruta, define el path y el unico elemento a renderizar en esa ruta */}
        <Route path="/" element={<ItemListContainer text="Comming soon..."/>} />
        <Route path="category/:nameCategory" element={<ItemListContainer />} />
        <Route path="item/:idProduct" element={<ItemDetailContainer />} />
        <Route path="*" element={<PageNotFound/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
