import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext.jsx';

function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
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
          <button className="cart-button" type="button">
            Add to Cart
          </button>
        </article>
      </div>
    </section>
  );
}

export default ProductDetails;
