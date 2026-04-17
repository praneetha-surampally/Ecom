import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext.jsx';
import { useShop } from '../contexts/ShopContext.jsx';

function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart, isInWishlist, toggleWishlist } = useShop();
  const [added, setAdded] = useState(false);
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="not-found">
        <h1>Product not found</h1>
        <p>The item may have moved or left the collection.</p>
        <Link className="details-button" to="/">
          Back to Home
        </Link>
      </section>
    );
  }

  const saved = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <section className="details-page">
      <Link className="back-link" to="/collections">
        Back to products
      </Link>
      <div className="details-layout">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>
        <article className="details-panel">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <strong>${product.price.toLocaleString()}</strong>
          <p>{product.description}</p>
          <div className="details-actions">
            <button className="cart-button" type="button" onClick={handleAddToCart}>
              {added ? 'Added' : 'Add to Cart'}
            </button>
            <button className="secondary-action" type="button" onClick={() => toggleWishlist(product)}>
              {saved ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProductDetails;
