import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const useForm = (validate, initialValue) => {
  const [values, setValues] = useState(initialValue);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({ error: "initError" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  useEffect(() => {
    if (Object.values(errors).filter(Boolean).length === 0) {
      navigate("/home", { replace: true });
    }
  }, [errors, navigate]);

  return { values, handleInputChange, handleSubmit, errors };
};

export default useForm;
