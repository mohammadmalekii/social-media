import { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      console.log(true);
    } else {
      setIsSubmit(false);
      console.log(false);
    }
  };
  return { values, handleInputChange, handleSubmit, isSubmit, errors };
};

export default useForm;
