import Banner from "./Banner.js";
import Cart from "./Cart.js";
import CallToActionSection from "./CallToActionSection.js";
import Footer from "./Footer.js";
import itemlist from "../itemlist.js";
import { Link } from "react-router-dom";
import Modal from "./Modal.js";
import Menu from "./Menu.js";
import Navbar from "./Navbar.js";
import React from "react";
import "../styles/keycapscatalogue.scss";

const KeycapsCatalogue = (props) => {
  const {
    addToCart,
    cart,
    handleVisibility,
    removeFromCart,
    replaceSpace,
    total,
    updateQuantity,
    visibility,
  } = props;

  const keycapItems = itemlist.filter((item) => !item.type);

  return (
    <div className="catalogue-keycaps">
      <Banner />
      <Navbar handleVisibility={handleVisibility} visibility={visibility} />
      <Cart
        updateQuantity={updateQuantity}
        cart={cart}
        total={total}
        removeFromCart={removeFromCart}
        visibility={visibility.cart}
        handleVisibility={handleVisibility}
      />
      <Menu handleVisibility={handleVisibility} visibility={visibility} />
      <main>
        {" "}
        <h2>Keycaps</h2>
        <div className="cont-keycap-items">
          {keycapItems.map((item, i) => {
            return (
              <div key={i} className="item-keycap">
                <h4>
                  <Link
                    className="item-name"
                    to={`/products/${replaceSpace(item.name)}`}
                  >
                    {item.name}
                  </Link>
                </h4>
                <img alt={item.name} src={item.image} />
                <p className="item-brand">{item.brand}</p>
                <p className="item-price">${item.price}.00</p>
                <button
                  className="btn-addtocart"
                  aria-label="Add to cart"
                  onClick={() => {
                    addToCart(item);
                    handleVisibility("cart", "open");
                  }}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
        <Modal visibility={visibility.modal} />
      </main>{" "}
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default KeycapsCatalogue;
