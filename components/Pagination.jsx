import Link from 'next/link';
import React from 'react';
import Router from 'next/router';

const pagination = [
  {
    value: "1",
    href: `/registro/${1}`,
    className: "inline-flex items-center border-t-2 border-transparent py-4 px-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
    // onClick: (e) => Router.push("/registro/[id]", `/registro/${1}`)
  },
  {
    value: "2",
    href: `/registro/${2}`,
    className: "inline-flex items-center border-t-2 border-transparent py-4 px-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
    // onClick: (e) => Router.push("/registro/[id]", `/registro/${2}`)
  },
  {
    value: "3",
    href: `/registro/${3}`,
    className: "inline-flex items-center border-t-2 border-transparent py-4 px-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
    // onClick: (e) => Router.push("/registro/[id]", `/registro/${3}`)
  }
]
// className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"

const Pagination = () => {
  return (
    <nav className="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0 mt-5">
      <div className="-mt-px flex w-0 flex-1">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Atras
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pagination.map(page => (
          <Link
            key={page.value}
            href={page.href}
            className={page.className}
          >
            {page.value}
          </Link>
        ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Siguiente
        </a>
      </div>
    </nav>
  );
}

export default Pagination;
