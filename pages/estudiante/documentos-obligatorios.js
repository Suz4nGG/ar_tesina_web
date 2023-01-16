import Layout from "../../components/Global/Layout";
import Navigation from "../../components/Global/Navigation";
import { PaperClipIcon } from "@heroicons/react/outline";
import Button from "../../components/Global/Button";
const DocumentosObligatorios = () => {
  return (
    <>
      <Navigation actState="session" />
      <Layout data={{ title: `Documentos Obligatorios` }}>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          <li className="relative border p-4 rounded text-gray-500 flex">
            <div className="group aspect-w-10 aspect-h-7 w-full overflow-hidden rounded-lg  focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <div className="block">
                <div className="flex justify-between w-full">
                  <div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      certificado_medico.pdf
                    </p>
                    <p className="pointer-events-none block text-sm font-medium text-gray-500">
                      Aceptado
                    </p>
                  </div>
                  <div className="w-16">
                    <PaperClipIcon />
                  </div>
                </div>
                <Button
                  bg="bg-green-600 w-full"
                  textColor="text-gray-100"
                  text="Subir"
                  href="#"
                  hover="bg-green-700 mt-4"
                />
              </div>
            </div>
          </li>
        </ul>
      </Layout>
    </>
  );
};

export default DocumentosObligatorios;
