import Pseudo from "react-dom-pseudo";
import { useState } from "react";
export const GroupForm = ({
  name,
  text,
  type,
  value,
  colSM = "1",
  colQuery,
  placeholder,
  handleChange,
  errorMessage,
}) => {
  const [event, setEvent] = useState('eve')
  return (
    <div className={`col-span-${colQuery} sm:col-span-${colSM}`}>
      <label
        htmlFor={name}
        className="block text-sm sm:text-base font-medium text-gray-700"
      >
        {text} <span className="text-red-600">*</span>
      </label>
      <div>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={(e) => setEvent(e.target.name)}
          className="
            appearance-none
          bg-gray-50 text-gray-700 border border-gray-300
            rounded py-3 leading-tight
            focus:outline-none focus:bg-gray-100 px-2 flex-1 rounded-r-md my-1
            block w-full
          focus:border-green-500 focus:ring-green-500
            text-sm md:text-base
            "
        />
      </div>
      <div className="text-sm text-red-600">
        {
          event ?
          errorMessage &&
          errorMessage.map((err) =>
            err.split(":")[0] === name && err.split(':')[0] === event ? (
              <p key={err.split(":")[1]}>{err.split(":")[1]}</p>
            ) : (
              ""
            )
            )
          : ''
        }
      </div>
    </div>
  );
};

const sheet = {
  inputFocus: {
    border: "1px solid rgba(0,0,0,0.1)",
    background: "#f0f0f3",
    transitionTimingFunction: "ease-in",
  },
};
