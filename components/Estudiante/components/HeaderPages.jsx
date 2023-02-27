import React from "react";
import ArrowRight from "components/icons/ArrowRight";
import ArrowLeft from "components/icons/ArrowLeft";
import Home from "components/icons/Home";
import { useRouter } from "next/router";

const HeaderPages = (title) => {
  console.log(title.data);
  const router = useRouter();
  // const { title } = data;
  return (
    <div className="py-4">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a
            onClick={() => router.back()}
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <ArrowLeft />
            Atras
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex items-center text-gray-500">
                <Home />
                <a
                  onClick={() => router.back()}
                  className="px-2 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  Atras
                </a>
                <ArrowRight />
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-medium leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight py-4">
            {title.data}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderPages;
