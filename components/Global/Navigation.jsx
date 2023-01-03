import LogoUv from "/public/universidad_veracruzana_logo.svg"
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { Popover, Transition } from '@headlessui/react'
import Link from "next/link"
import Image from "next/image"
import { Fragment } from "react";

// ! Items primary menu
const primaryNavigation = [
  { name: "Inicio", href: "/" },
  { name: "Recursos", href: "/recursos" },
  { name: "Contacto", href: "/contacto" }
]
// ! Items secondary menu
const secondaryNavigation = [
  {
    name: "Contacto: (555) 412-1234",
    href: "tel:5541251234",
    text: "text-blue-600 text-sm font-medium hover:underline"
  },
  {
    name: "Iniciar Sesión",
    href: "/iniciar_sesion",
    text: "text-white focus:ring-4 font-medium rounded-lg text-base px-5 py-2.5 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
  }
]

const Navigation = () => {
  return (
    <header>
      <Popover className="bg-transparent">
        <div className="
          grid
          p-5
          grid-cols-1
          md:grid-cols-[300px,_1fr]
          mx-auto bg-gray-100
        ">
          {/* Navegación: LOGO */}
          <div className="flex items-center justify-between space-x-3">
            <Link href="/" className="flex">
              <Image
                src={LogoUv}
                alt="Universidad Veracruzana Logo"
                title="Logo Universidad Veracruzana"
                className="w-30"
                width={60} height={16} />
              <span className="
                hidden md:block self-end
                mt-2 lg:text-base font-medium
                whitespace-nowrap dark:text-gray-600">
                  Universidad Veracruzana
              </span>
            </Link>
            {/* Responsive: BTN */}
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button
                className="
                  inline-flex items-center p-2 ml-3
                  text-base text-gray-400
                  rounded-lg md:hidden hover:bg-gray-100
                  focus:outline-none focus:ring-2 focus:ring-gray-200
                dark:text-gray-400"
              >
                <span className="sr-only">Abrir Menu</span>
                <MenuIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>
          <div>
            {/* * Primary Menu */}
            <Popover.Group
              as="nav"
              className="
                container hidden md:flex
                flex-wrap justify-end items-center
                space-x-7 max-w-screen-xl px-3 py-5 mx-auto
            ">
              {
                secondaryNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={item.text}
                  >
                    {item.name}
                  </Link>
                ))
              }
            </Popover.Group>
            {/* * Secondary Menu */}
            <Popover.Group
              as="nav"
              className="
                container hidden md:flex
                flex-wrap justify-end items-center
                space-x-7 max-w-screen-xl px-3 py-5 mx-auto
                border-solid border-t-2 border-t-gray-200
            ">
              {
                primaryNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="
                    text-gray-600 flex flex-row
                      space-x-8 text-base font-medium items-center hover:underline"
                  >
                    {item.name}
                  </Link>
                ))
              }
            </Popover.Group>
          </div>
          {/* Responsive: Menu */}
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="
                z-30 top-0 inset-x-0 p-2
                transition transform origin-top-right md:hidden
            ">
              <div className="border-solid border-t-2 border-t-gray-200">
                <Popover.Button
                  className="
                    p-2 inline-flex items-center justify-center
                    mt-5 rounded-lg md:hidden hover:text-gray-100
                    focus:outline-none focus:ring-2 focus:ring-gray-200
                  dark:text-gray-700 dark:hover:bg-gray-700">
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="">Cerrar menú</span>
                </Popover.Button>
              </div>
              <div className="pt-5 pb-6">
                <div className="pb-5 grid grid-cols-1 gap-2 ">
                  {
                    primaryNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="
                          block py-4 px-2 pr-4 text-gray-700 rounded hover:bg-gray-100
                          md:hover:bg-transparent md:p-0 md:dark:hover:text-white
                        dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        {item.name}
                      </Link>
                    ))
                  }
                </div>
                <div className="flex justify-between items-center pl-2">
                  {
                    secondaryNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={item.text}
                      >
                        {item.name}
                      </Link>
                    ))
                  }
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </header>
  )
}

export default Navigation