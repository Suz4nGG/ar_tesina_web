import Image from "next/image"
import Button from "../Global/Button"
import HeroImg from "/public/uv_hero.png"
import { LOGIN, REGISTRO } from "../../pages/constants"
export default function Hero() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Hero */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2" />
            <div className="mx-auto max-w-full">
              <div className="relative sm:overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={HeroImg}
                    alt="Universidad Veracruzana Imagen"
                    title="Universidad Veracruzana Estadio Xalapeño"
                    className="h-full w-full object-cover blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="mx-auto break-words text-center font-bold tracking-tight text-3xl sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Universidad Veracruzana</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-200 sm:max-w-3xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center sm:items-center">
                    <div className="flex justify-center items-center sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 gap-2 sm:space-y-0 flex-col mo:flex-row">
                      <Button bg="bg-blue-600 w-full mo:w-42" textColor="text-gray-100" text="Registrate" href={`${REGISTRO}`} hover="bg-blue-700"/>
                      <Button bg="bg-green-600 w-full mo:w-42" textColor="text-gray-100" text="Inicia Sesión" href={`${LOGIN}`} hover="bg-green-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
