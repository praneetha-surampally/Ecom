import { Link, NavLink } from 'react-router-dom';
import { useShop } from '../contexts/ShopContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';

function Navbar() {
  const { cartCount, wishlistCount } = useShop();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <Link className="logo" to="/">
        Luminous
      </Link>
      <nav aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collections">Collections</NavLink>
        <NavLink to="/wishlist">Wishlist <span>{wishlistCount}</span></NavLink>
        <NavLink to="/cart">Cart <span>{cartCount}</span></NavLink>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme} type="button">
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Navbar;
