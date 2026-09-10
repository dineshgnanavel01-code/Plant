export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity }) {
  if (!isOpen) return null;

  return (
    <div className="cart-drawer">
   
      <div className="cart-header">
        <div>
          <h2>Your Cart</h2>
          <p>Review your items before checkout</p>
        </div>
        <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
          ✕
        </button>
      </div>

   
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div className="cart-item-card" key={item.id}>
            <div className="cart-item-info">
              <span>{item.name}</span>
            </div>
            
            <div className="quantity-control">
              <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}