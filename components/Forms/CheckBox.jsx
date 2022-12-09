import React from 'react';

const CheckBox = ({ text, col, name, classs, ref }) => {
  return (
    <div className={`mt-4 space-y-4 col-span-${col} md:col-span-3 ${classs}`}>
      <div className="self-center">
        <div className="flex h-5 items-center">
          <input
            id={name}
            name={name}
            type="checkbox"
            className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-gray-500"
            ref={ref}
          />
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-sm md:text-base text-gray-700">
            {text}
          </label>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
