import React from "react";
import PropTypes from "prop-types";

const PDFLayout = ({ children }) => {
  return <div>{children}</div>;
};

PDFLayout.propTypes = {
  children: PropTypes.node,
};

export default PDFLayout;
