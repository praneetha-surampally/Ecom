import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Toast from './components/Toast.jsx';
import Cart from './pages/Cart.jsx';
import Collections from './pages/Collections.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Wishlist from './pages/Wishlist.jsx';
import { useTheme } from './contexts/ThemeContext.jsx';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Toast />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>
      <footer className="footer">
        <div>
          <strong>ECOM</strong>
          <p>Curating the future of digital and physical design excellence.</p>
        </div>
        <nav aria-label="Footer links">
          <a href="/">Privacy Policy</a>
          <a href="/">Shipping & Returns</a>
          <a href="/collections">Collections</a>
          <a href="/">Sustainability</a>
        </nav>
        <span>2026 ECOM Editorial. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
