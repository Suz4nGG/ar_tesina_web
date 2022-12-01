import Link from "next/link"
import Image from "next/image"

const Navigation = () => {
  return (
    <div className="
      grid
      grid-cols-1 p-5
      md:grid-cols-2
      mx-auto bg-gray-100">
      {/* Navegación Top */}
      <div className="flex items-center justify-between space-x-3">
        <Link href="/" className="flex">
          <Image
            src="/universidad_veracruzana_logo.svg"
            alt="Universidad Veracruzana Logo"
            title="Logo Universidad Veracruzana"
            width={60} height={16} />
          <span className="hidden md:block self-end mt-2 text-md lg:text-xl font-semibold whitespace-nowrap dark:text-gray-700">
            Universidad Veracruzana
          </span>
        </Link>
        {/* Responsive BTN */}
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          class="
            inline-flex items-center p-2 ml-3
            text-sm text-gray-500
            rounded-lg md:hidden
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400"
          aria-controls="navbar-hamburger"
          aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd">
          </path>
        </svg>
        </button>
      </div>
      <div>
    <nav className="p-5">
      <div className="
        container
        flex flex-wrap justify-end items-center
        max-w-screen-xl
        mx-0
        ">
          <div className="flex items-center">
            <a href="tel:5541251234"
              className="
                text-gray-800 text-sm font-medium
                dark:text-dark mr-6 hover:underline
                ">
                  Contacto: (555) 412-1234</a>
            <Link
              href="/iniciar_sesion"
              className="
                dark:text-blue hover:underline
                text-blue-700 text-sm font-medium
              ">
                Iniciar Sesión
            </Link>
        </div>
      </div>
      </nav>
        <nav className="
          dark:text-dark border-solid border-t-2 border-t-gray-200
          hidden w-full md:block md:w-auto" id="navbar-hamburger">
          <div className="
            container flex flex-wrap justify-end items-center
            max-w-screen-xl px-4 py-8 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="
              text-gray-800 flex flex-row mt-0
              space-x-8 text-sm font-medium items-center">
              <li>
                <Link href="/inicio" className="">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/inicio">
                  Recursos
                </Link>
              </li>
                    <li>
                <Link href="/inicio">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      
    </div>
  )
}

export default Navigation