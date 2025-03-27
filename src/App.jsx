import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import NavBarLogin from './Components/utilities/NavBarLogin';
import Footer from './Components/utilities/Footer';
import LoginPage from './Pages/Auth/LoginPage';
import Register from './Pages/Auth/Register';
import AllCategoryPage from './Pages/Category/AllCategoryPage';

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
