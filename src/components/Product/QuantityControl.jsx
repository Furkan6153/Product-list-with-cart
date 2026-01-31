<<<<<<< HEAD
import MinusIcon from "../../assets/icon-decrement-quantity.svg?react";
import PlusIcon from "../../assets/icon-increment-quantity.svg?react";


export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
    return (
        <div className="quantity-control">
            <button className="decrease" onClick={onDecrease}>
                <MinusIcon className="icon" /> 
            </button>
            <span className="quantity">{quantity}</span>
              <button className="increase" onClick={onIncrease}>
                <PlusIcon className="icon" />
            </button>
        </div>
    );
=======
import MinusIcon from "../../assets/icon-decrement-quantity.svg?react";
import PlusIcon from "../../assets/icon-increment-quantity.svg?react";


export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
    return (
        <div className="quantity-control">
            <button className="decrease" onClick={onDecrease}>
                <MinusIcon className="icon" /> 
            </button>
            <span className="quantity">{quantity}</span>
              <button className="increase" onClick={onIncrease}>
                <PlusIcon className="icon" />
            </button>
        </div>
    );
>>>>>>> ae0ea15b19c4b4463082e69094ddd3a1b5673986
}