import LogoUv from "/public/universidad_veracruzana_logo.svg";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import {
  dataNavigationSessionStudent,
  primaryNavigation,
  sessionNav,
} from "../../data.js";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import axios from "axios";
import { LOGOUT, LOGIN } from "/constants";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ArrowDown from "../icons/ArrowDown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const secondaryNavigation = [
  {
    name: "Contacto: (555) 412-1234",
    href: "tel:5541251234",
    text: "text-blue-600 text-sm font-medium hover:underline",
  },
  {
    name: "Iniciar Sesión",
    href: LOGIN,
    text: "text-white focus:ring-4 font-medium rounded-lg text-base px-5 mt-5 mob:mt-0 w-full mob:w-auto py-2.5 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800",
  },
];

const Navigation = ({ actState, initialData }) => {
  const [nav, setNav] = useState(primaryNavigation);
  useEffect(() => {
    if (actState) setNav(dataNavigationSessionStudent);
  }, [actState]);
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      const res = await axios.post(LOGOUT);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header>
      <Popover className="bg-transparent">
        <div
          className="
          bg-white
          grid
          p-5
          grid-cols-1
          md:grid-cols-[300px,_1fr]
          mx-auto max-w-md- mx-auto-
        "
        >
          {/* Navegación: LOGO */}
          <div className="flex items-center justify-between space-x-3">
            <Link href="/" className="flex" passHref>
              <Image
                src={LogoUv}
                alt="Universidad Veracruzana Logo"
                title="Logo Universidad Veracruzana"
                className="w-10 md:w-14"
                width={60}
                height={16}
                priority={true}
              />
              <span
                className="
                hidden md:block self-end
                mt-2 lg:text-base font-medium
                whitespace-nowrap dark:text-gray-600"
              >
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
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="z-auto">
            {/* * Primary Menu */}
            <Popover.Group
              as="nav"
              className="
                container hidden md:flex
                flex-wrap justify-end items-center
                space-x-7 max-w-screen-xl px-3 py-5 mx-auto z-auto
            "
            >
              {secondaryNavigation.map((item) =>
                actState ? (
                  item.name === "Iniciar Sesión" ? (
                    <Link
                      key="logout"
                      href="#"
                      className={item.text}
                      onClick={handleLogOut}
                    >
                      Cerrar Sesión
                    </Link>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={item.text}
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <Link key={item.name} href={item.href} className={item.text}>
                    {item.name}
                  </Link>
                )
              )}
            </Popover.Group>
            {/* * Secondary Menu */}
            <Popover.Group
              as="nav"
              className="
                container hidden md:flex
                flex-wrap justify-end items-center
                space-x-7 max-w-screen-xl px-3 py-5 mx-auto
                border-solid border-t-2 border-t-gray-200 z-auto
            "
            >
              {actState ? (
                <>
                  <Popover className="relative flex">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-800" : "text-gray-600",
                            "group inline-flex items-center rounded-md text-base font-medium hover:text-gray-600 focus:outline-none hover:underline z-10"
                          )}
                        >
                          <ArrowDown />
                          <span>Gestiones</span>
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-1/2 z-10 mt-9 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                              <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8 text-gray-100 hover:text-gray-900 z-10">
                                {nav.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out text-gray-700 hover:bg-gray-100
                                    dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    <p className="text-base font-medium">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  {sessionNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="
                    text-gray-600 flex flex-row
                      space-x-8 text-base font-medium items-center hover:underline z-10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  {nav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="
                    text-gray-600 flex flex-row
                      space-x-8 text-base font-medium items-center hover:underline z-10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              )}
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
            "
            >
              <div className="border-solid border-t-2 border-t-gray-200">
                <Popover.Button
                  className="
                    p-2 inline-flex items-center justify-center
                    mt-5 rounded-lg md:hidden hover:text-gray-100
                    focus:outline-none focus:ring-2 focus:ring-gray-200
                  dark:text-gray-700 dark:hover:bg-gray-700"
                >
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="">Cerrar menú</span>
                </Popover.Button>
              </div>
              <div className="pt-5 pb-6">
                <div className="pb-5 grid grid-cols-1 gap-2">
                  {nav.map((item) => (
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
                  ))}
                </div>
                <div className="flex flex-col mob:flex-row justify-start sm:justify-between mob:justify-between items-start mob:items-center pl-2 text-sm sm:text-base">
                  {secondaryNavigation.map((item) =>
                    actState ? (
                      item.name === "Iniciar Sesión" ? (
                        <Link
                          key="logout"
                          href="#"
                          className={item.text}
                          onClick={handleLogOut}
                        >
                          Cerrar Sesión
                        </Link>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={item.text}
                        >
                          {item.name}
                        </Link>
                      )
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={item.text}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </header>
  );
};

export default Navigation;
