import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { useShop } from '../contexts/ShopContext.jsx';

function Wishlist() {
  const { wishlistItems } = useShop();

  if (wishlistItems.length === 0) {
    return (
      <section className="empty-state shop-empty">
        <h1>Your wishlist is empty</h1>
        <p>Save products you like and revisit them here.</p>
        <Link className="details-button" to="/collections">
          Explore Products
        </Link>
      </section>
    );
  }

  return (
    <section className="shop-page">
      <div className="shop-heading">
        <p>Saved products</p>
        <h1>Your Wishlist</h1>
      </div>
      <div className="product-grid">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Wishlist;
