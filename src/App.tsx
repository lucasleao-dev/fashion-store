import { useState } from "react";
import "./App.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

// Lista de produtos
const productsData: Product[] = [
  { id: 1, name: "Camiseta Branca", price: 49.9, image: "/public/camiseta.webp" },
  { id: 2, name: "Jaqueta Jeans", price: 199.9, image: "/public/jaqueta.webp" },
  { id: 3, name: "Camisa Social", price: 89.9, image: "/public/camisasocial.webp" },
  { id: 4, name: "Tênis Casual", price: 129.9, image: "/public/tenis.webp" },
];
export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Adicionar item ao carrinho
  const addToCart = (product: Product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remover item do carrinho
  const removeFromCart = (id: number) => setCart(prev => prev.filter(item => item.id !== id));

  // Limpar carrinho
  const clearCart = () => setCart([]);

  // Total do carrinho
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="App">
      <header>
        <h1>Fashion Store</h1>
      </header>

      <main>
        {/* Produtos */}
        <section className="products">
          {productsData.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">R$ {product.price.toFixed(2)}</p>
              <button className="add-btn" onClick={() => addToCart(product)}>Adicionar</button>
            </div>
          ))}
        </section>

        {/* Carrinho */}
        <aside className="cart">
          <h2>Carrinho</h2>
          {cart.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <>
              <ul>
                {cart.map(item => (
                  <li key={item.id}>
                    <span>{item.name} x {item.quantity}</span>
                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.id)}>❌</button>
                  </li>
                ))}
              </ul>
              <h3>Total: R$ {total.toFixed(2)}</h3>
              <button className="clear-btn" onClick={clearCart}>Esvaziar Carrinho</button>
            </>
          )}
        </aside>
      </main>
    </div>
  );
}
