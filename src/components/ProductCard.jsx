import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../contexts/ShopContext.jsx';

function ProductCard({ product }) {
  const { addToCart, isInWishlist, toggleWishlist } = useShop();
  const [added, setAdded] = useState(false);
  const saved = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="product-card">
      <button
        className={`wishlist-button ${saved ? 'saved' : ''}`}
        type="button"
        onClick={() => toggleWishlist(product)}
        aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        {saved ? 'Saved' : 'Save'}
      </button>
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <div className="card-meta">
          <span>{product.category}</span>
          <strong>${product.price.toLocaleString()}</strong>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="card-actions">
          <Link className="details-button" to={`/product/${product.id}`}>
            View Details
          </Link>
          <button className="quick-cart-button" type="button" onClick={handleAddToCart}>
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
