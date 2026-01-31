
import RemoveFromCartIcon from "../../assets/icon-remove-item.svg?react";

export default function CartItem({ item, decreaseFromCart }) {

  return (
    <>
      <div className="cart-item">
        <div>
          <h4>{item.name}</h4>
        </div>
        <div className="wrapper">
          <div>
            <p className="quantity">{item.quantity}x</p>
            <span className="price">@ ${item.price.toFixed(2)}</span>
            <span className="total-price">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
          <div onClick={() => decreaseFromCart(item)} className="cart-item-remove">
            <RemoveFromCartIcon className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}
