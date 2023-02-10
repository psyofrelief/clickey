import Banner from "./Banner.js";
import CallToActionSection from "./CallToActionSection.js";
import Cart from "./Cart.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import itemlist from "../itemlist.js";
import Modal from "./Modal.js";
import Menu from "./Menu.js";
import Navbar from "./Navbar.js";
import React, { useEffect, useState } from "react";
import "../styles/switchesCatalogue.scss";

const SwitchesCatalogue = (props) => {
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

  const switchItems = itemlist.filter((item) => item.type);

  const [focused, setFocused] = useState({
    linear: false,
    tactile: false,
    all: false,
  });

  const [state, setState] = useState({
    products: switchItems,
    filteredProducts: switchItems,
  });

  const [type, setType] = useState("All");

  const handleFocus = (button) => {
    setFocused({ [button]: true });
  };

  const handleChange = (e, state) => {
    setType(e.target.value);
  };
  const handleFilter = () => {
    if (type === "All") {
      setState({ ...state, filteredProducts: state.products });
      return;
    }
    setState((state) => ({
      ...state,
      filteredProducts: state.products.filter((item) => item.type === type),
    }));
  };

  useEffect(() => {
    handleFilter();
  }, [type]);

  const filteredProductsMapped = state.filteredProducts.map((item) => {
    return (
      <div key={item.id} className="featured-item">
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
  });

  return (
    <div className="catalogue-switches">
      <Banner />
      <Navbar visibility={visibility} handleVisibility={handleVisibility} />
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
        <h2>Switches</h2>
        <div className="cont-filter">
          <button
            onClick={(e) => {
              handleChange(e, "type");
              handleFocus("linear");
            }}
            className={`${focused.linear ? "highlight" : ""}`}
            value="Linear"
          >
            Linear
          </button>
          <button
            onClick={(e) => {
              handleChange(e, "type");
              handleFocus("tactile");
            }}
            className={`${focused.tactile ? "highlight" : ""}`}
            value="Tactile"
          >
            Tactile
          </button>

          <button
            onClick={(e) => {
              handleChange(e, "type");
              handleFocus("all");
            }}
            className={`${focused.all ? "highlight" : ""}`}
            value="All"
          >
            {" "}
            All{" "}
          </button>
        </div>
        <div className="cont-switch-items">{filteredProductsMapped}</div>
        <Modal visibility={visibility.modal} />
      </main>{" "}
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default SwitchesCatalogue;
