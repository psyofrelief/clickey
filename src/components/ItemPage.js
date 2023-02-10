import React from "react";
import { useParams } from "react-router-dom";
import itemlist from "../itemlist.js";
import "../styles/itempage.scss";
import Navbar from "./Navbar.js";
import Modal from "./Modal.js";
import Cart from "./Cart.js";
import Footer from "./Footer.js";

const ItemPage = (props) => {
  const {
    replaceSpace,
    addToCart,
    handleVisibility,
    removeFromCart,
    visibility,
    cart,
    updateQuantity,
    total,
  } = props;

  const { productId } = useParams();

  let item = itemlist.filter((i) => replaceSpace(i.name) === productId);

  return (
    <div className="itempage">
      <Navbar handleVisibility={handleVisibility} />
      <Cart
        updateQuantity={updateQuantity}
        cart={cart}
        total={total}
        removeFromCart={removeFromCart}
        visibility={visibility.cart}
        handleVisibility={handleVisibility}
      />
      <main>
        <div className="cont-img">
          <img
            className="img-itempage"
            alt={item[0].name}
            src={item[0].image}
          />{" "}
        </div>
        <div className="cont-details">
          <p className="item-name">{item[0].name}</p>
          <p className="item-price">${item[0].price}.00</p>
          <p className="item-brand">
            By: <span>{item[0].brand}</span>
          </p>
          <p className="sku">SKU: {item[0].id}</p>
          <button
            className="btn-add-cart-large"
            onClick={() => {
              addToCart(item[0]);
              handleVisibility("cart", "open");
            }}
          >
            Add to cart
          </button>
        </div>
        <Modal visibility={visibility.modal} />
      </main>
      <Footer />
    </div>
  );
};

export default ItemPage;
