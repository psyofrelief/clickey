import React from "react";
import { Link } from "react-router-dom";
import itemlist from "../itemlist.js";
import "../styles/featured.scss";

let newList = itemlist.filter((i) => i.featured);

const FeaturedSection = (props) => {
  const { replaceSpace, addToCart, handleVisibility } = props;

  return (
    <section className="featured">
      <h2>Featured</h2>
      <div className="cont-featured-items">
        {" "}
        {newList.map((item, i) => {
          return (
            <div className="featured-item" key={i}>
              {" "}
              <div className="cont-item-info">
                {" "}
                <h3>
                  <Link
                    className="item-name"
                    to={`/products/${replaceSpace(item.name)}`}
                  >
                    {item.name}
                  </Link>
                </h3>{" "}
                <img
                  className="featured-item-img"
                  alt={item.name}
                  src={item.image}
                />
                <p className="item-brand">{item.brand}</p>
                <p className="item-price">${item.price}.00</p>
              </div>{" "}
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
      </div>{" "}
    </section>
  );
};

export default FeaturedSection;
