import CartIcon from "../../assets/icon-add-to-cart.svg?react";
import QuantityControl from "./QuantityControl";

export default function ProductAddBtn({ quantity, onIncrease, onDecrease }) {
  if (quantity === 0) {
    return (
      <button onClick={onIncrease} className="add-to-cart">
        <span className="icon">
          <CartIcon />
        </span>
        Add to Cart
      </button>
    );
  }

  return (
    <QuantityControl
      quantity={quantity}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
}
