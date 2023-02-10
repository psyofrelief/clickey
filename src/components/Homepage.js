import Banner from "./Banner.js";
import Cart from "./Cart.js";
import CallToActionSection from "./CallToActionSection.js";
import FeaturedSection from "./FeaturedSection.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Menu from "./Menu.js";
import Modal from "./Modal.js";
import Navbar from "./Navbar.js";
import React from "react";
import "../styles/homepage.scss";

const Homepage = (props) => {
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

  return (
    <div className="homepage">
      <Banner />
      <main>
        {" "}
        <Navbar
          visibility={visibility}
          handleVisibility={handleVisibility}
        />{" "}
        <Cart
          updateQuantity={updateQuantity}
          cart={cart}
          total={total}
          removeFromCart={removeFromCart}
          visibility={visibility.cart}
          handleVisibility={handleVisibility}
        />
        <main>
          <Menu handleVisibility={handleVisibility} visibility={visibility} />
          <Header />
          <FeaturedSection
            handleVisibility={handleVisibility}
            replaceSpace={replaceSpace}
            addToCart={addToCart}
          />
          <Modal visibility={visibility.modal} />
        </main>
      </main>{" "}
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Homepage;
