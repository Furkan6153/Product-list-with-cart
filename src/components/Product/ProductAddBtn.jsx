<<<<<<< HEAD
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
=======
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
>>>>>>> ae0ea15b19c4b4463082e69094ddd3a1b5673986
