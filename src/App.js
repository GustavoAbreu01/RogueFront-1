import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Compare from './Pages/Compare/Compare';
import ProductCategory from './Pages/ProductCategory/ProductCategory';
import ProductPage from './Pages/ProductPage/ProductPage';
import Quiz from './Pages/Quiz/Quiz';
import Save from './Pages/Save/Save';
import Search from './Pages/Search/Search';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import ChatWegner from './Pages/ChatWegner/ChatWegner';
import CartPayment from './Pages/CartPayment/CartPayment';
import CartConfirm from './Pages/CartConfirm/CartConfirm';
import CartTransport from './Pages/CartTransport/CartTransport';
import CartFinish from './Pages/CartFinish/CartFinish';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import EditProfile from './Pages/EditProfile/EditProfile';
import ScrollToTop from './ScrollToTop';



function App() {
  return (
    <Router>
       <ScrollToTop />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/category/:category" element={<ProductCategory />} />
          <Route path="/product/:code" element={<ProductPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/save" element={<Save />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/payment" element={<CartPayment />} />
          <Route path="/cart/confirm" element={<CartConfirm />} />
          <Route path="/cart/transport" element={<CartTransport />} />
          <Route path="/weggner" element={<ChatWegner />} />
          <Route path="/cart/finish" element={<CartFinish />} />
          <Route path="/orders" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
    </Router>
  );
}

export default App;
