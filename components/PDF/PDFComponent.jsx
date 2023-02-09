import { useEffect, useState } from "react";
import { Adaptacion, PDF } from "./Adaptacion";
import { PaperClipIcon } from "@heroicons/react/solid";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ButtonN from "../Global/ButtonN";

const PDFComponent = ({ dataSolicitud, dataEstudiante }) => {
  const [showPDF, setShowPDF] = useState(false);
  const [renderPDF, setRenderPDF] = useState();
  const previewPDF = () => setShowPDF(!showPDF);
  useEffect(() => setRenderPDF(true), []);

  return (
    <>
      <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt className="font-medium text-gray-500">Archivos</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul
            role="list"
            className="divide-y divide-gray-200 rounded-md border border-gray-200"
          >
            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <div className="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2 w-0 flex-1">
                  {dataEstudiante === undefined || dataEstudiante === null
                    ? ""
                    : `AC_${dataEstudiante.nombreCompleto}`
                        .toLowerCase()
                        .split(" ")
                        .join("_")}
                </span>
              </div>
              <div className="ml-4 flex flex-shrink-0 space-x-4">
                {renderPDF ? (
                  <PDFDownloadLink
                    document={
                      <PDF
                        dataEstudiante={dataEstudiante}
                        dataSolicitud={dataSolicitud}
                      />
                    }
                    fileName={`AC_${dataEstudiante.nombreCompleto}`
                      .toLowerCase()
                      .split(" ")
                      .join("_")}
                  >
                    <ButtonN
                      styles={
                        "text-green-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      }
                      message={"Descargar"}
                    />
                  </PDFDownloadLink>
                ) : (
                  ""
                )}
                <ButtonN
                  handleClick={previewPDF}
                  styles={
                    "hidden sm:block text-green-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  }
                  message="Visualizar"
                />
              </div>
            </li>
          </ul>
        </dd>
      </div>
      <div>
        {showPDF && (
          <div className="w-full h-screen hidden sm:block">
            <Adaptacion
              dataEstudiante={dataEstudiante}
              dataSolicitud={dataSolicitud}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PDFComponent;
