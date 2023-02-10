import React from "react";

const Modal = (props) => {
  const { visibility } = props;
  return <div className={`modal ${visibility}`}></div>;
};

export default Modal;
