import { Link } from 'react-router-dom';
import { useShop } from '../contexts/ShopContext.jsx';

function Cart() {
  const { cartItems, cartTotal, clearCart, removeFromCart, updateCartQuantity } = useShop();

  if (cartItems.length === 0) {
    return (
      <section className="empty-state shop-empty">
        <h1>Your cart is empty</h1>
        <p>Add products from the collection and they will appear here.</p>
        <Link className="details-button" to="/collections">
          Shop Collections
        </Link>
      </section>
    );
  }

  return (
    <section className="shop-page">
      <div className="shop-heading">
        <p>Checkout preview</p>
        <h1>Your Cart</h1>
      </div>

      <div className="cart-layout">
        <div className="shop-list">
          {cartItems.map((item) => (
            <article className="shop-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <span>{item.category}</span>
                <h2>{item.name}</h2>
                <strong>${item.price.toLocaleString()}</strong>
              </div>
              <div className="quantity-control">
                <button
                  type="button"
                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="remove-button" type="button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <span>Order Summary</span>
          <div>
            <p>Subtotal</p>
            <strong>${cartTotal.toLocaleString()}</strong>
          </div>
          <button className="cart-button" type="button">
            Checkout
          </button>
          <button className="secondary-action" type="button" onClick={clearCart}>
            Clear Cart
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
