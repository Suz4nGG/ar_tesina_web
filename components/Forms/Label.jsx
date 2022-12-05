import React from 'react';

const Label = ({name, text}) => {
  return (
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-700"
    >
    {text}
    </label>
  );
}

export default Label;
