import React from "react";

const ButtonN = ({ styles, message, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`rounded-md px-4 py-2 my-2 font-medium ${styles} focus:outline-none`}
    >
      {message}
    </button>
  );
};

export default ButtonN;
