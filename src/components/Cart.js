import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "../styles/cart.scss";

const Cart = (props) => {
  const {
    visibility,
    total,
    handleVisibility,
    cart,
    updateQuantity,
    removeFromCart,
  } = props;

  const [values, setValues] = useState({
    discount: "",
  });

  let cartList = cart.map((item, i) => {
    return (
      <div className="cart-item" key={i}>
        <img alt={item.name} src={item.image} className="cart-item-img" />
        <div className="cart-item-info">
          <div className="top">
            {" "}
            <button
              className="btn-remove-cart"
              onClick={() => removeFromCart(item)}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <h4 className="cart-item-name">{item.name}</h4>
          </div>{" "}
          <p className="cart-item-type">Product type: {item.type}</p>
          <div className="middle">
            <div className="quantity">
              <button onClick={() => updateQuantity(item, "subtract")}>
                -
              </button>
              <p className="item-quantity">{item.quantity}</p>
              <button onClick={() => updateQuantity(item, "add")}>+</button>
            </div>
            <p className="item-price">${+item.quantity * +item.price}.00</p>
          </div>
        </div>{" "}
      </div>
    );
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <div className={`cart ${visibility}`}>
      <div className="head">
        <h3>Cart</h3>
        <button
          className="btn-close"
          onClick={() => {
            handleVisibility("cart");
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      {cart.length ? (
        <div className="cont-cart-items">
          {cartList}{" "}
          <div className="checkout">
            <div className="cont-discount">
              <input
                onChange={(e) => handleChange(e)}
                name="discount"
                type="text"
                value={values.discount}
                placeholder="Discount code"
              />
              <button>Apply</button>
            </div>
            <div className="price">
              {" "}
              <div className="cont-shipping">
                <p>Shipping</p>{" "}
                <p className="calculated-at-checkout">CALCULATED AT CHECKOUT</p>
              </div>
              <div className="cont-total">
                <p>Subtotal</p>
                <p>${total}.00</p>
              </div>
              <button className="btn-checkout">Checkout</button>
            </div>
            <p
              className="btn-continue-shopping"
              onClick={() => {
                handleVisibility("cart");
              }}
            >
              Or continue shopping
            </p>
          </div>
        </div>
      ) : (
        <p className="empty-cart-text">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
