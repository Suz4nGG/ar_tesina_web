import React from 'react';

const Input = ({placeholder, type, name, ref}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        name={name}
        ref={ref}
        type={type}
        id={name}
        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </>
  );
}

export default Input;
