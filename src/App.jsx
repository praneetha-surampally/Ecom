import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Collections from './pages/Collections.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import { useTheme } from './contexts/ThemeContext.jsx';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      <footer className="footer">
        <div>
          <strong>Luminous</strong>
          <p>Curating the future of digital and physical design excellence.</p>
        </div>
        <nav aria-label="Footer links">
          <a href="/">Privacy Policy</a>
          <a href="/">Shipping & Returns</a>
          <a href="/collections">Collections</a>
          <a href="/">Sustainability</a>
        </nav>
        <span>2026 Luminous Editorial. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
