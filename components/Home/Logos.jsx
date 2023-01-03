import Image from "next/image"
import Cendhiu from "/public/logo-cendhiu_.png"

const logos = [
  {
    name: "Cendhiu", src: Cendhiu, alt: "Centro para el desarrollo humano intregral de los universitarios"
  },
  {
    name: "Cendhiu2", src: Cendhiu, alt: "Centro para el desarrollo humano intregral de los universitarios"
  },
  {
    name: "Cendhiu3", src: Cendhiu, alt: "Centro para el desarrollo humano intregral de los universitarios"
  },
  {
    name: "Cendhiu4", src: Cendhiu, alt: "Centro para el desarrollo humano intregral de los universitarios"
  }
]

const Logos = () => {
  return (
    <div className="mx-auto w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8">
        <h2>
          <span className="block text-center text-2xl font-medium leading-8 tracking-tight text-gray-800 sm:text-3xl break-words">
              CENTROS DE AYUDA AL ESTUDIANTE EN LA UNIVERSIDAD VERACRUZANA
          </span>
        </h2>
      </div>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
          {
            logos.map(logo => (
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex-col items-center" key={logo.name}>
                <Image
                  src={logo.src}
                  alt="Cendhiu Logo"
                  width={300}
                  height={16}
                />
                <p className="text-gray-800 break-words">{logo.name}</p>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default Logos;
