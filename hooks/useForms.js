import { useForm } from "react-hook-form";

const UseForms = ( data ) => {
  console.log("PR", data)
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    }
  });
}

export default UseForms;
