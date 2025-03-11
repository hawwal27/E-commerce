import './App.css';
import Navbar from "./Component/Navbar/navbar";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/Login-Signup';
import Shop from './Pages/shop';
import Cart from './Pages/Cart';
import Footer from './Component/Footer/Footer';
import men_banner from "./Component/Assets/banner_mens.png"
import women_banner from "./Component/Assets/banner_women.png"
import kid_banner from "./Component/Assets/banner_kids.png"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men" banner= {men_banner} />}/>
k        <Route path='/Womens' element={<ShopCategory category="women" banner={women_banner}/>}/>
        <Route path='/Kids' element={<ShopCategory category="kid" banner={kid_banner} />}/>
        <Route path='/product' element={<Product/>} >
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
