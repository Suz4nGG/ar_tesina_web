export default function ComboBox({
  info,
  title,
  required,
  adaptaciones,
  handleChange,
  name,
}) {
  console.log(name);
  return (
    <ul className="border-b-2 py-4">
      <h2 htmlFor={title} className="block font-medium text-bgBac text-xl">
        {title}
        {required && <span className="text-red-600">*</span>}
      </h2>
      <div className="mt-1">
        <p className="block text-sm font-medium text-bgBac py-2">{info}</p>
      </div>
      {/* * RENDERIZAR ESTE APARTADO */}
      {adaptaciones.map((item) => (
        <li key={item}>
          <div className="space-y-5">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  onChange={handleChange}
                  id={item}
                  aria-describedby={item}
                  name={item}
                  value={item}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor={item} className="font-medium text-gray-900">
                  {item}
                </label>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
