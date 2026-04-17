import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState(null);
  const [wishlistItems, setWishlistItems] = useState([]);
  const toastTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  const showToast = (message) => {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    setToast({ id: Date.now(), message });
    toastTimer.current = setTimeout(() => {
      setToast(null);
    }, 2200);
  };

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} added to cart`);
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId));
    showToast('Removed from cart');
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const toggleWishlist = (product) => {
    const isCurrentlySaved = wishlistItems.some((item) => item.id === product.id);

    setWishlistItems((currentItems) => {
      const isSaved = currentItems.some((item) => item.id === product.id);

      if (isSaved) {
        return currentItems.filter((item) => item.id !== product.id);
      }

      return [...currentItems, product];
    });
    showToast(isCurrentlySaved ? 'Removed from wishlist' : `${product.name} saved to wishlist`);
  };

  const clearCart = () => {
    setCartItems([]);
    showToast('Cart cleared');
  };
  const isInWishlist = (productId) => wishlistItems.some((item) => item.id === productId);

  const value = useMemo(() => {
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return {
      addToCart,
      cartCount,
      cartItems,
      cartTotal,
      clearCart,
      isInWishlist,
      removeFromCart,
      toast,
      toggleWishlist,
      updateCartQuantity,
      wishlistCount: wishlistItems.length,
      wishlistItems
    };
  }, [cartItems, toast, wishlistItems]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error('useShop must be used inside ShopProvider');
  }

  return context;
}
