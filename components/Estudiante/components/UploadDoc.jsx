import React from "react";

const UploadDoc = ({handleChange}) => {
  return (
    <div className="mt-4">
      <label
        className="block text-sm sm:text-base font-medium text-gray-700"
        htmlFor="large_size"
      >
        Certificado Médico <span className="text-red-600">*</span>
      </label>
      <input
        className="
          cursor-pointer dark:text-gray-400 focus:outline-none
        bg-gray-50 appearance-none
        text-gray-700 border border-gray-300
          rounded py-3 leading-tight
          focus:bg-gray-100 px-2 flex-1 rounded-r-md my-1
          block w-full
        focus:border-green-500 focus:ring-green-500
          text-sm md:text-base"
        id="large_size"
        type="file"
        onChange={handleChange}
      />
    </div>
  );
};

export default UploadDoc;
