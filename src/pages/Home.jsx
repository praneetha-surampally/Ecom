import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { useProducts } from '../contexts/ProductContext.jsx';

function Home() {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 3);
  const featuredCategories = [
    {
      name: 'Electronics',
      text: 'Smart tools for sharper work, better sound, and cleaner daily routines.'
    },
    {
      name: 'Fashion',
      text: 'Wearable essentials with quiet details and modern silhouettes.'
    },
    {
      name: 'Home',
      text: 'Objects that make desks, shelves, and slow mornings feel considered.'
    }
  ];

  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="home-copy">
          <p>Modern digital atelier</p>
          <h1>
            ECOM for design-led everyday shopping.
          </h1>
          <span>
            Discover a focused storefront for premium electronics, fashion, accessories, and home goods.
          </span>
          <div className="hero-actions">
            <Link className="details-button" to="/collections">
              Shop Collections
            </Link>
            <Link className="secondary-button" to="/product/1">
              View Featured
            </Link>
          </div>
        </div>

        <div className="home-showcase" aria-label="Featured product preview">
          <img src={products[1].image} alt={products[1].name} />
          <div>
            <span>{products[1].category}</span>
            <strong>{products[1].name}</strong>
            <p>${products[1].price.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <section className="category-preview" aria-label="Featured categories">
        {featuredCategories.map((category) => (
          <Link className="category-tile" key={category.name} to="/collections">
            <span>{category.name}</span>
            <p>{category.text}</p>
          </Link>
        ))}
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <p>Featured picks</p>
          <h2>Start with the essentials.</h2>
          <Link to="/collections">Browse all products</Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;
