<<<<<<< HEAD
import orderConfirmedIcon from "../../assets/icon-order-confirmed.svg";

export default function OrderModal({ isOpen, cartItems, orderTotal, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="order-modal">
        <img draggable="false" src={orderConfirmedIcon} alt="" />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>

        <div className="order-items">
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <img draggable="false" src={item.image.thumbnail} alt="" />
              <div className="wrapper">
                <span className="order-name">{item.name}</span>
                <div>
                  <span className="order-quantity">{item.quantity}x</span>
                  <span className="order-price">
                    @ ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
          <div className="order-total">
            <p>Order Total</p>
            <strong>${orderTotal.toFixed(2)}</strong>
          </div>
        </div>
        <button className="new-order-btn" onClick={onClose}>Start New Order</button>
      </div>
    </div>
  );
}
=======
import orderConfirmedIcon from "../../assets/icon-order-confirmed.svg";

export default function OrderModal({ isOpen, cartItems, orderTotal, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="order-modal">
        <img draggable="false" src={orderConfirmedIcon} alt="" />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>

        <div className="order-items">
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <img draggable="false" src={item.image.thumbnail} alt="" />
              <div className="wrapper">
                <span className="order-name">{item.name}</span>
                <div>
                  <span className="order-quantity">{item.quantity}x</span>
                  <span className="order-price">
                    @ ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
          <div className="order-total">
            <p>Order Total</p>
            <strong>${orderTotal.toFixed(2)}</strong>
          </div>
        </div>
        <button className="new-order-btn" onClick={onClose}>Start New Order</button>
      </div>
    </div>
  );
}
>>>>>>> ae0ea15b19c4b4463082e69094ddd3a1b5673986
