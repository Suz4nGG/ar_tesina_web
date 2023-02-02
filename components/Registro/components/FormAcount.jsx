import { useState } from "react";
import Eye from "../../../components/icons/Eye";
import EyeN from "../../../components/icons/EyeN";
import { dataAcount } from "../../../data";

export default function FormAcount({ handleChange, errorMessage }) {
  const [event, setEvent] = useState();
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div className="w-full grid grid-cols-2 gap-y-4 gap-x-4 md:grid-cols-6 lg:grid-cols-6 px-4 sm:p-0 mb-6">
      {dataAcount.map((item) => (
        <div
          className={`col-span-${item.colQuery} sm:col-span-${item.colSM}`}
          key={item.name}
        >
          <label
            htmlFor={item.name}
            className="block text-sm sm:text-base font-medium text-gray-700"
          >
            {item.text} <span className="text-red-600">*</span>
          </label>
          <div>
            <input
              id={item.name}
              name={item.name}
              type={
                item.type === "password"
                  ? show
                    ? "password"
                    : "text"
                  : item.type
              }
              placeholder={item.placeholder}
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
            {event
              ? errorMessage &&
                errorMessage.map((err) =>
                  err.split(":")[0] === item.name &&
                  err.split(":")[0] === event ? (
                    <p key={err.split(":")[1]}>{err.split(":")[1]}</p>
                  ) : (
                    ""
                  )
                )
              : ""}
          </div>
          {item.name === "password" ? (
              <button onClick={handleClick}>
                {show ? (
                  <span className="text-sm flex">
                    <Eye />
                    <span className="ml-2">Mostrar</span>
                  </span>
                ) : (
                  <span className="text-sm flex items-center justify-between">
                    <EyeN /> <span className="ml-2">Ocultar</span>
                  </span>
                )}
              </button>
            ) : (
              ""
            )}
        </div>
      ))}
    </div>
  );
}
