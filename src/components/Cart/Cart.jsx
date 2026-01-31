
import cartEmptyIcon from "../../assets/illustration-empty-cart.svg";
import carbonIcon from "../../assets/icon-carbon-neutral.svg";
import CartItem from "./CartItem";

export default function Cart({ cartTotal, cartItems, decreaseFromCart, setIsOrderOpen, cartClear }) {

  const orderTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart-title">
        Your Cart <span>({cartTotal})</span>
      </div>
      <div className="cart-body">
        {cartItems.length === 0 && (
          <div className="empty">
            <img draggable="false" src={cartEmptyIcon} alt="" />
            <p>Your added items will appear here</p>
          </div>
        )}
        
      </div>
      {cartItems.map((item) => (
        <CartItem decreaseFromCart={decreaseFromCart} key={item.id} item={item} />
      ))}
      {cartItems.length > 0 && (
        <>
          <button onClick={() => cartClear()} className="cart-clear-btn">Clear</button>
          <div className="order-total">
            <p>Order Total</p>
            <span className="total">${orderTotal.toFixed(2)}</span>
          </div>
          <div className="carbon">
              <img draggable="false" src={carbonIcon} alt="" />
              This is a <span>carbon-neutral</span> delivery
          </div>
          <div className="order-confirm">
            <button onClick={() => setIsOrderOpen(true)} className="confirm-btn">
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
