import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <div className="card-meta">
          <span>{product.category}</span>
          <strong>${product.price.toLocaleString()}</strong>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link className="details-button" to={`/product/${product.id}`}>
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
