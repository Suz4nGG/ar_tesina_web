import Image from "next/image";
import Link from "next/link";
import HeroImg from "/public/uv_hero.png";
import { LOGIN, REGISTRO } from "/constants";

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
                  <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="mx-auto break-words text-center font-bold tracking-tight text-2xl sm:text-5xl lg:text-6xl">
                    <span className="block text-gray-100">
                      Bienvenido al portal de ajustes curriculares
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-100 sm:max-w-3xl">
                    Nuestra principal misión es promover una igualdad de
                    condiciones para todos los estudiantes, primordialmente para
                    los estudiantes en situación de discapacidad, es por ello
                    por lo que en este portal podrás solicitar adaptaciones
                    curriculares para tus Experiencias Educativas.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center sm:items-center">
                    <div className="flex justify-center items-center sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 gap-2 sm:space-y-0 flex-col mo:flex-row">
                      <Link
                        className="bg-blue-600 w-full mo:w-42 text-white rounded px-4 py-2 text-center hover:bg-blue-700"
                        href={REGISTRO}
                      >
                        Registrate
                      </Link>
                      <Link
                        className="bg-green-600 w-full mo:w-42 text-white rounded px-4 py-2 text-center hover:bg-green-700"
                        href={LOGIN}
                      >
                        Inicia Sesión
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
