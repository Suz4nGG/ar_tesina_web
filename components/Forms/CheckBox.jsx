const CheckBox = ({ text, col, name, classs, handleChange, value, handleClick}) => {
  return (
    <div className={`space-y-4 col-span-${col} md:col-span-3 ${classs}`}>
      <div className="self-center">
        <div className="flex h-5 items-center">
          <input
            type="checkbox"
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            onClick={handleClick}
            className="
              h-6 w-6 rounded border-gray-300
            text-indigo-600 focus:ring-gray-500"
          />
          <div className="ml-3 text-sm">
            <label
              htmlFor={name}
              className="font-medium text-sm md:text-base text-gray-700 break-words"
            >
              {text}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;