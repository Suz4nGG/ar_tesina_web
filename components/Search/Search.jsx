import { SearchIcon, XCircleIcon } from "@heroicons/react/outline";

const Search = ({ findSolicitud, setSearch, search }) => {
  const handleSearch = ({ target: { value } }) => setSearch(value);

  return (
    <div className="flex flex-col mt-4 justify-self-end">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-bgBac"
      >
        Buscar solicitud por ID
      </label>
      <div className="w-full sm:w-fit mt-2 flex border relative border-gray-400 bg-transparent rounded justify-between  pl-2">
        <input
          name="search"
          type="text"
          onChange={handleSearch}
          className="block w-full outline-none rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="ID Solicitud"
        />
        <div className="bg-green-700 px-2">
          <SearchIcon className="h-10 text-gray-200 " />
        </div>
      </div>
      <div
        style={!search === true ? { display: "none" } : { display: "block" }}
        className="bg-red-100 px-2 flex justify-center items-center mt-4 rounded"
      >
        <p
          style={
            findSolicitud.length === 0
              ? { display: "flex" }
              : { display: "none" }
          }
          className="text-bgBac font-semibold py-4 items-center justify-center flex-col"
        >
          <XCircleIcon className="h-10 text-red-400" />
          Solicitud no encontrada
        </p>
      </div>
    </div>
  );
};

export default Search;
