import Image from 'next/image';
import LogoUv from "/public/universidad_veracruzana_logo.svg"
const HeaderForm = ({ title, step }) => {
  const Title = (
    step === "FormOne" && "DATOS DE IDENTIFICACIÓN DEL ESTUDIANTE" ||
    step === "FormTwo" && "DATOS DEL TIPO DE DISCAPACIDAD QUE SE PRESENTA" ||
    step === "FormThree" && "DATOS ESCOLARES DEL ESTUDIANTE"
  )
  return (
    <div className="flex justify-between flex-col md:flex-row w-full">
      <h2 className="px-4 mb-2 md:m-0 text-center self-auto md:self-end text-xl md:text-2xl font-bold tracking-tight text-gray-800">
        {title ? title : Title}
      </h2>
      <Image
        src={LogoUv}
        alt="Universidad Veracruzana Logo"
        title="Logo Universidad Veracruzana"
        className="h-16 w-auto"
        width={60} height={16}
      />
    </div>
  );
}

export default HeaderForm;
