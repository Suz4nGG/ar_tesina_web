import Image from 'next/image';
import LogoUv from "/public/universidad_veracruzana_logo.svg"

const HeaderForm = ({ title, step }) => {
  const Title = (
    step === "FormOne" && "DATOS DE IDENTIFICACIÓN DEL ESTUDIANTE" ||
    step === "FormTwo" && "DATOS DEL TIPO DE DISCAPACIDAD DEL ESTUDIANTE" ||
    step === "FormThree" && "DATOS ESCOLARES DEL ESTUDIANTE" ||
    step === "FormAcount" && "DATOS DE LA CUENTA"
  )
  return (
    <div className="flex items-center px-4 sm:px-0 flex-col md:flex-row w-full mb-5 border-b border-gray-300">
      <h2 className="py-3 text-center self-auto md:self-end text-lg md:text-xl font-medium tracking-tight text-gray-700 break-words">
        {title ? title : Title}
      </h2>
      {/* <Image
        src={LogoUv}
        alt="Universidad Veracruzana Logo"
        title="Logo Universidad Veracruzana"
        className="h-16 w-auto"
        width={60} height={16}
      /> */}
    </div>
  );
}

export default HeaderForm;
