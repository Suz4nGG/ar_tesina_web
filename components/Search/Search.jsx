import { SearchIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/outline";

const Search = ({ findSolicitud, setSearch, search }) => {
  const handleSearch = ({ target: { value } }) => setSearch(value);

  return (
    <div className="flex flex-col mt-4 justify-self-end">
      <label className="text-gray-700 text-sm">Buscar solicitud por ID</label>
      <div className="w-full sm:w-fit mt-2 flex border border-gray-400 bg-transparent rounded justify-between  px-2">
        <input
          type="text"
          onChange={handleSearch}
          className="bg-transparent outline-none rounded py-2 w-full text-gray-700"
          placeholder="ID Solicitud"
        />
        <SearchIcon className="h-10 text-gray-500" />
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
          className="text-gray-600 font-semibold py-4 items-center justify-center flex-col"
        >
          <XCircleIcon className="h-10 text-red-400" />
          Solicitud no encontrada
        </p>
      </div>
    </div>
  );
};

export default Search;
