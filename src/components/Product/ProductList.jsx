import Product from "./Product";


export default function ProductList({ products, cartItems, onAddToCart, decreaseFromCart }) {
  return (
    <div>
      <h1 className="title">Desserts</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product 
            cartItems={cartItems}
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            decreaseFromCart={decreaseFromCart}
          />
        ))}
      </div>
    </div>
  )
}
