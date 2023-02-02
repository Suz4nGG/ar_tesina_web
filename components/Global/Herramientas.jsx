import Link from "next/link";
const Herramientas = ({ data, showTitle }) => {
  return (
    <div className={`overflow-hidden bg-white relative ${showTitle ? "px-4 sm:px-6 lg:px2 py-9" : ''}`}>
      <div className="relative mx-auto max-w-7xl pb-10">
        <div className="lg:col-span-1 my-6">
        {
          showTitle ?
          <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl">
            Herramientas de ayuda
          </h2> :
          ''
        }
          <p>
            La WCAG, ha clasificado el software de ayuda para personas con
            discapacidad con lo siguiente:
          </p>
        </div>
        {data.map((item) => (
          <div
            className="relative lg:grid lg:grid-cols-3 lg:gap-x-9 xl:gap-x-12 py-6"
            key={item.titleSection}
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-medium tracking-tight text-gray-900 sm:text-2xl">
                {item.titleSection}
              </h2>
              <p className="py-4">
                {item.description}
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
              {item.herramientas.map((her) => (
                <Link href={her.href || ''} key={her.nameHerramienta} passHref target="_blank">
                <div>
                  <dt>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                      <item.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-lg font-semibold leading-8 text-gray-800">
                      {her.nameHerramienta}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">
                    {her.descriptionHerr}
                  </dd>
                </div>
                </Link>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Herramientas;
