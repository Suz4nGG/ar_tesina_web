import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Search = ({ findSolicitud, setSearch, search }) => {
  const handleSearch = ({ target: { value } }) => setSearch(value);

  return (
    <div className="flex flex-col mt-4 justify-self-end">
      <label className="text-gray-700">Buscar solicitud por ID</label>
      <div className="flex border border-gray-400 rounded justify-between  px-2">
        <input
          type="number"
          onChange={handleSearch}
          className="outline-none rounded py-2 w-full text-gray-700"
        />
        <SearchIcon className="h-10 text-gray-300" />
      </div>
      <div
        style={!search === true ? { display: "none" } : { display: "block" }}
      >
        <p
          style={
            findSolicitud.length === 0
              ? { display: "block" }
              : { display: "none" }
          }
          className="text-gray-700 font-normal"
        >
          Solicitud no encontrada
        </p>
      </div>
    </div>
  );
};

export default Search;
