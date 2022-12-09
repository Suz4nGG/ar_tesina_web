const ContainerForm = ({ children }) => {
  console.log(children)
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form className="w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" onSubmit={onSubmit}>
        {children}
    </form>
  );
}

export default ContainerForm;
