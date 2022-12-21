const GroupForm = ({ name, text, placeholder, ref, type, col, colQuery, register }) => {
  console.log("GR",name)
  return (
    <div className={`col-span-${col} md:col-span-${col}`}>
      <label
        htmlFor={name}
        className="block text-sm md:text-base font-medium text-gray-700"
      >
        {text}
      </label>
      <div className="mt-1">
        <input
        {...register(name)}
        placeholder={placeholder}
        type={type}
        id={name}
        className="py-3 px-2 flex-1 rounded-r-md
          block w-full rounded-md border-2 border-gray-200
        focus:border-indigo-500 focus:ring-indigo-500
          text-sm md:text-base"
      />
      </div>
    </div>
  );
}

export default GroupForm;
