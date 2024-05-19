import './App.css';
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProduct from './components/all_products/AllProduct';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='/allproducts' element={<AllProduct />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
