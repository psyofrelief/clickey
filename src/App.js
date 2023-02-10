import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.js";
import ItemPage from "./components/ItemPage.js";
import SwitchesCatalogue from "./components/SwitchesCatalogue.js";
import KeycapsCatalogue from "./components/KeycapsCatalogue.js";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [visibility, setVisibility] = useState({
    cart: "hide",
    modal: "hide",
    menu: "hide",
  });
  const handleVisibility = (item, status) => {
    if (item === "cart") {
      if (visibility[item] === "hide") {
        setVisibility({ ...visibility, [item]: "", modal: "" });
        return;
      }
      if (status) {
        setVisibility({ ...visibility, [item]: "", modal: "" });
        return;
      }
      setVisibility({ ...visibility, [item]: "hide", modal: "hide" });
      return;
    }
    if (item === "menu") {
      if (visibility[item] === "hide") {
        setVisibility({ ...visibility, [item]: "" });
        return;
      }
      setVisibility({ ...visibility, [item]: "hide" });
      return;
    }
  };

  const replaceSpace = (string) => {
    return string.split(" ").join("-");
  };

  const addToCart = (item) => {
    const index = cart.findIndex((i) => item.id === i.id);
    if (index === -1) {
      setCart([...cart, { ...item, quantity: 1 }]);
      setTotal(total + +item.price);
    } else {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
      setTotal(total + +item.price);
    }
  };
  const removeFromCart = (item) => {
    setTotal(total - +item.quantity * +item.price);
    setCart(cart.filter((i) => item.name !== i.name));
  };
  const updateQuantity = (item, operator) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const newCart = [...cart];
      if (operator === "add") {
        newCart[index].quantity++;
        setCart(newCart);
        setTotal(total + +item.price);
      } else if (operator === "subtract" && newCart[index].quantity > 1) {
        newCart[index].quantity--;
        setCart(newCart);
        setTotal(total - +item.price);
      }
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Homepage
            updateQuantity={updateQuantity}
            visibility={visibility}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            total={total}
            handleVisibility={handleVisibility}
            replaceSpace={replaceSpace}
          />
        }
      />
      <Route
        path="/products/:productId"
        element={
          <ItemPage
            replaceSpace={replaceSpace}
            addToCart={addToCart}
            handleVisibility={handleVisibility}
            updateQuantity={updateQuantity}
            visibility={visibility}
            cart={cart}
            removeFromCart={removeFromCart}
            total={total}
          />
        }
      />
      <Route
        path="/catalogue/switches"
        element={
          <SwitchesCatalogue
            replaceSpace={replaceSpace}
            updateQuantity={updateQuantity}
            visibility={visibility}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            total={total}
            handleVisibility={handleVisibility}
          />
        }
      />
      <Route
        path="/catalogue/keycaps"
        element={
          <KeycapsCatalogue
            replaceSpace={replaceSpace}
            updateQuantity={updateQuantity}
            visibility={visibility}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            total={total}
            handleVisibility={handleVisibility}
          />
        }
      />
    </Routes>
  );
}

export default App;
