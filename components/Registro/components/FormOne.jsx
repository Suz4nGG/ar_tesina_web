import { dataForm } from "data";
import { GroupForm } from "../../Forms/GroupForm";

const FormOne = ({ data, handleChange, errorMessage }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-y-4 gap-x-4 md:grid-cols-6 lg:grid-cols-6 px-4 sm:p-0 mb-6">
      {dataForm.map((item) => (
        <GroupForm
          key={item.name}
          name={item.name}
          text={item.text}
          type={item.type}
          colSM={item.colSM}
          // value={data[item.name]}
          colQuery={item.colQuery}
          handleChange={handleChange}
          errorMessage={errorMessage}
          placeholder={item.placeholder}
        />
      ))}
    </div>
  );
};

export default FormOne;
