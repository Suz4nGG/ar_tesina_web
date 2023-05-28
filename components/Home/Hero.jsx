import Image from "next/image";
import Link from "next/link";
import HeroImg from "/public/bibloteca.jpeg";
import { LOGIN, REGISTRO, HERRAMIENTAS_ACCESIBLES } from "/constants";

export default function Hero() {
  return (
    <div className="bg-black">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="absolute inset-0">
              <Image
                src={HeroImg}
                alt="Librero de una biblioteca, contiene diferentes libros"
                title="Librero de una biblioteca, contiene diferentes libros"
                className="h-full w-full object-cover"
                priority={true}
                height={"auto"}
                width={"auto"}
              />
              <div className="absolute inset-0 bg-bgBtn__ mix-blend-multiply backdrop-opacity-100" />
            </div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-100 ring-1 ring-gray-100 hover:ring-gray-100/50">
                Conoce sobre herramientas accesibles.{" "}
                <Link
                  href={HERRAMIENTAS_ACCESIBLES}
                  className="font-semibold text-green-600"
                  passHref={true}
                >
                  <span className="absolute inset-0" aria-hidden="false" />
                  Leer más <span aria-hidden="false">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center relative">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                Bienvenido al portal de ajustes curriculares{" "}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Nuestra principal misión es promover una igualdad de condiciones
                para todos los estudiantes, primordialmente para los estudiantes
                en situación de discapacidad, es por ello por lo que en este
                portal podrás solicitar adaptaciones curriculares para tus
                Experiencias Educativas.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href={REGISTRO}
                  className="rounded-md bg-bgBtn__ px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Registrate
                </Link>
                <Link
                  href={LOGIN}
                  className="text-sm font-semibold leading-6 text-gray-100"
                  passHref={true}
                >
                  Iniciar Sesión{" "}
                  <span aria-hidden="false" className="text-green-600">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
