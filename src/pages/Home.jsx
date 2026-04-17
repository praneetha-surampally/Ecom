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
          <div className="hero-highlights" aria-label="Store highlights">
            <span>Free shipping over $120</span>
            <span>12 curated drops</span>
            <span>Dark mode ready</span>
          </div>
          <div className="hero-actions">
            <Link className="details-button" to="/collections">
              Shop Collections
            </Link>
            <Link className="secondary-button" to="/product/1">
              View Featured
            </Link>
          </div>
        </div>

        <div className="home-visual-stage" aria-label="Featured product preview">
          <div className="stage-backdrop" aria-hidden="true"></div>
          <div className="stage-badge" aria-hidden="true">
            <span>Limited</span>
            <strong>Drop</strong>
          </div>
          <div className="stage-card stage-card-main">
            <img src={products[1].image} alt={products[1].name} />
            <div>
              <span>{products[1].category}</span>
              <strong>{products[1].name}</strong>
              <p>${products[1].price.toLocaleString()}</p>
            </div>
          </div>
          <div className="stage-card stage-card-left">
            <img src={products[2].image} alt={products[2].name} />
            <strong>{products[2].name}</strong>
          </div>
          <div className="stage-card stage-card-right">
            <img src={products[0].image} alt={products[0].name} />
            <strong>{products[0].name}</strong>
          </div>
        </div>
      </div>

      <section className="home-stats" aria-label="ECOM store stats">
        <div>
          <strong>4.9/5</strong>
          <span>Average product rating</span>
        </div>
        <div>
          <strong>24h</strong>
          <span>Fast dispatch window</span>
        </div>
        <div>
          <strong>120+</strong>
          <span>Curated style checks</span>
        </div>
      </section>

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
