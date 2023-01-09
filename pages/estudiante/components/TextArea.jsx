import React from 'react';

const TextArea = ({ label, name, description, required, placeholder, handleChange, value }) => {
  return (
    <div className='mt-4'>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} <span className='text-red-600'>{required}</span>
      </label>
      <div className="mt-1">
        <p className='block text-sm font-medium text-gray-700'>{description}</p>
        <textarea
          rows={4}
          name={name}
          id={name}
          className="appearance-none
          bg-gray-50 text-gray-700 border border-gray-300
            rounded py-3 leading-tight
            focus:outline-none focus:bg-gray-100 px-2 flex-1 rounded-r-md my-1
            block w-full
          focus:border-green-500 focus:ring-green-500
            text-sm md:text-base"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
}

export default TextArea;
