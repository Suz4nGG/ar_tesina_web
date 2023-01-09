const Herramientas = ({ data, title }) => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl pb-10">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-medium text-gray-900 sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-9 xl:gap-x-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl"></h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            {data.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-gray-800">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Herramientas;
