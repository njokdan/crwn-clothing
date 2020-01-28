import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, onClick, otherProps }) => (
  <button className="custom-button" onClick={onClick} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
