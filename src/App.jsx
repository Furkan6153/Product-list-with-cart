import "./css/App.css";
import ProductList from "./components/Product/ProductList";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import OrderModal from "./components/Order/OrderModal";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const CART_KEY = "cartItems";

  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) ?? [];
    } catch {
      localStorage.removeItem(CART_KEY);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (isOrderOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOrderOpen]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const decreaseFromCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((i) => i.id === product.id);
      if (!existing) return items;

      if (existing.quantity === 1) {
        return items.filter((i) => i.id !== product.id);
      }

      return items.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity - 1 } : i,
      );
    });
  };

  const cartClear = () => {
    setCartItems([]);
    localStorage.removeItem(CART_KEY);
  }

  const orderTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <main>
      <ProductList
        decreaseFromCart={decreaseFromCart}
        cartItems={cartItems}
        onAddToCart={addToCart}
        products={products}
      />
      <Cart
        setIsOrderOpen={setIsOrderOpen}
        decreaseFromCart={decreaseFromCart}
        cartTotal={cartTotal}
        cartItems={cartItems}
        cartClear={cartClear}
      />
      <OrderModal
        isOpen={isOrderOpen}
        cartItems={cartItems}
        orderTotal={orderTotal}
        onClose={() => {
          setIsOrderOpen(false);
          setCartItems([]);
          localStorage.removeItem(CART_KEY);
        }}
      />
    </main>
  );
}
