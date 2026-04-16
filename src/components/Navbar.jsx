import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.jsx';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <Link className="logo" to="/">
        Luminous
      </Link>
      <nav aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collections">Collections</NavLink>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme} type="button">
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Navbar;
