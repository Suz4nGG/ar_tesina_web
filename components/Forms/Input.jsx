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
        className="py-3 px-2 flex-1 rounded-r-md
          block w-full rounded-md border-2 border-gray-200
        focus:border-indigo-500 focus:ring-indigo-500
          sm:text-sm"
      />
    </>
  );
}

export default Input;
