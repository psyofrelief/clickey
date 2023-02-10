import React, { useState } from "react";
import "../styles/calltoaction.scss";

const CallToActionSection = (props) => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const { firstName, lastName, email } = inputs;
  return (
    <section className="call-to-action">
      <div className="cont-inputs">
        <label htmlFor="">
          First Name
          <input
            id="inp-firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="">
          Last Name
          <input
            id="inp-lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="">
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
      <button type="submit" className="btn-subscribe">
        Subscribe
      </button>
    </section>
  );
};

export default CallToActionSection;
