import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Explore from './components/Explore';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/signup';
import Product from './components/Product';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='cart/:productcartId' element={<Cart />}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='explore/product/:productId' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
