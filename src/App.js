import './App.css';
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/cart' element={<Cart />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
