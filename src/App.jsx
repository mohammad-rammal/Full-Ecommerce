import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import NavBarLogin from './Components/utilities/NavBarLogin';
import Footer from './Components/utilities/Footer';
import LoginPage from './Pages/Auth/LoginPage';
import Register from './Pages/Auth/Register';
import AllCategoryPage from './Pages/Category/AllCategoryPage';
import AllBrandPage from './Pages/Brand/AllBrandPage';
import ShopProductsPage from './Pages/Products/ShopProductsPage';
import ProductDetailsPage from './Pages/Products/ProductDetailsPage';
import CartPage from './Pages/Cart/CartPage';
import ChoosePayMethod from './Pages/Checkout/ChoosePayMethod';

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/allproducts" element={<ShopProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethod" element={<ChoosePayMethod />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
