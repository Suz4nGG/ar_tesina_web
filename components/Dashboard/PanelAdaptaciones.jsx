import { UsersIcon, CalendarIcon } from "@heroicons/react/outline";

const PanelAdaptaciones = ({
  date,
  stateSol,
  estadoSolicitud,
  idSolicitud,
  handleClick,
  responsables,
}) => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md mt-4">
      <ul role="list" className="divide-y divide-gray-200">
        <li key={idSolicitud}>
          <a href="#" className="block hover:bg-gray-50">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="truncate text-sm font-medium text-green-600">
                  <span className="text-bgBac font-semibold">Estado: </span>{" "}
                  <span className="font-semibold" style={{color: stateSol.color}}>
                    {stateSol[estadoSolicitud]}
                  </span>
                </p>
                <div className="ml-2 flex flex-shrink-0">
                  <button
                    onClick={handleClick}
                    className="inline-flex rounded-full bg-bgBtn__-700 px-4 py-1 text-xs font-semibold leading-5 text-gray-50"
                  >
                    Ver
                  </button>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500 truncate">
                    <UsersIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="mr-1.5">Responsables: </span>{" "}
                    {responsables.profesor}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <p>
                    Solicitada el <time dateTime={date}>{date}</time>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PanelAdaptaciones;
