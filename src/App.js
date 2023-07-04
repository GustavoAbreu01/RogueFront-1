import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //React Router
import NotFound from './Pages/NotFound/NotFound';
import Compare from './Pages/Compare/Compare';
import ProductCategory from './Pages/ProductCategory/ProductCategory';
import ProductPage from './Pages/ProductPage/ProductPage';
import Quiz from './Pages/Quiz/Quiz';
import Save from './Pages/Save/Save';
import Search from './Pages/Search/Search';
import UserRegister from './Pages/UserRegister/UserRegister';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import ChatWegner from './Pages/ChatWegner/ChatWegner';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/category" element={<ProductCategory />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/save" element={<Save />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/weggner" element={<ChatWegner />} />
        </Routes>
    </Router>
  );
}

export default App;
