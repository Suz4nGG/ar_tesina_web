import React from 'react';

const Label = ({name, text}) => {
  return (
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700"
    >
    {text}
    </label>
  );
}

export default Label;
