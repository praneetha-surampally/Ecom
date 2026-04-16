import { useEffect, useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { useProducts } from '../contexts/ProductContext.jsx';

const PRODUCTS_PER_PAGE = 6;

function Collections() {
  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    [products]
  );

  const visibleProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return [...filteredProducts].sort((firstProduct, secondProduct) => {
      if (sortOrder === 'low-high') {
        return firstProduct.price - secondProduct.price;
      }

      if (sortOrder === 'high-low') {
        return secondProduct.price - firstProduct.price;
      }

      return firstProduct.id - secondProduct.id;
    });
  }, [products, searchTerm, selectedCategory, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / PRODUCTS_PER_PAGE));
  const firstItemIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = visibleProducts.slice(
    firstItemIndex,
    firstItemIndex + PRODUCTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <section className="collections-page">
      <div className="collection-heading">
        <p>Shop the edit</p>
        <h1>
          ECOM <span>Collections.</span>
        </h1>
        <span>
          Search, filter, sort, and browse the complete catalog from one focused shopping view.
        </span>
      </div>

      <section className="controls" aria-label="Product controls">
        <label className="search-control">
          <span>Search</span>
          <input
            type="search"
            placeholder="Search the collection..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>

        <div className="category-control">
          <span>Categories</span>
          <div className="category-pills" role="group" aria-label="Filter products by category">
            {categories.map((category) => (
              <button
                className={selectedCategory === category ? 'active' : ''}
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <label>
          <span>Sort by</span>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
            <option value="default">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </label>
      </section>

      <div className="results-row">
        <p>
          Showing {paginatedProducts.length} of {visibleProducts.length} products
        </p>
      </div>

      {paginatedProducts.length > 0 ? (
        <div className="product-grid">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try a different search term or category.</p>
        </div>
      )}

      <div className="pagination" aria-label="Pagination">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((page) => page - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Collections;
