import React from 'react';

const footerNavigation = [
  {
    name: "Universidad Veracruzana",
    href: "/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }
]

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-9 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 border-solid border-t-2 border-t-gray-300">
        {/* <div className="flex justify-center space-x-6 md:order-2">
          {footerNavigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div> */}
        <div className="md:order-1">
          <p className="text-center text-base text-gray-500">&copy; Universidad Veracruzana 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;