import React from 'react';

const ContainerForm = (props) => {
  return (
    <form className="space-y-8 divide-y divide-gray-200 md:pb-0 pb-9">
      <div className="space-y-8 divide-y divide-gray-200">
        {props.children}
      </div>
    </form>
  );
}

export default ContainerForm;
