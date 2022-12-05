import React from 'react';

const ContainerForm = (props) => {
  return (
    <div className="flex min-h-full flex-col py-12 sm:px-6 lg:px-8">
      <div className="justify-center mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              {props.children}
            </form>
          </div>
        </div>
    </div>
  );
}

export default ContainerForm;
