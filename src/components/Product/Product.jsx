<<<<<<< HEAD
import ProductAddBtn from "./ProductAddBtn";

export default function Product({
  product,
  cartItems,
  onAddToCart,
  decreaseFromCart,
}) {
  const quantity = cartItems.find((i) => i.id === product.id)?.quantity ?? 0;
  const isAdded = cartItems.some(item => item.id === product.id);

  return (
    <div className="product">
      <img className={isAdded ? "added" : ""} draggable="false" src={product.image.desktop} alt={product.name} />
      <ProductAddBtn
        quantity={quantity}
        onIncrease={() => onAddToCart(product)}
        onDecrease={() => decreaseFromCart(product)}
        product={product}
      />
      <div className="infos">
        <h4 className="category">{product.category}</h4>
        <h3 className="product-name">{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
=======
import ProductAddBtn from "./ProductAddBtn";

export default function Product({
  product,
  cartItems,
  onAddToCart,
  decreaseFromCart,
}) {
  const quantity = cartItems.find((i) => i.id === product.id)?.quantity ?? 0;
  const isAdded = cartItems.some(item => item.id === product.id);

  return (
    <div className="product">
      <img className={isAdded ? "added" : ""} draggable="false" src={product.image.desktop} alt={product.name} />
      <ProductAddBtn
        quantity={quantity}
        onIncrease={() => onAddToCart(product)}
        onDecrease={() => decreaseFromCart(product)}
        product={product}
      />
      <div className="infos">
        <h4 className="category">{product.category}</h4>
        <h3 className="product-name">{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
>>>>>>> ae0ea15b19c4b4463082e69094ddd3a1b5673986
