import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ProductProvider } from './contexts/ProductContext.jsx';
import { ShopProvider } from './contexts/ShopContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ShopProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </ShopProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
