import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { auth, db } from "../firebase.config";
import validate from "../Pages/UserForm/SignUp/validate";

const useSignUp = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({ error: "initError" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));

    try {
      const responseFormAuth = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const userId = responseFormAuth.user.uid;

      // saveing to firestore
      await addDoc(collection(db, "users"), {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
        uid: userId,
      });

      // save users to localStorage or Redux
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
          uid: userId,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.values(errors).filter(Boolean).length === 0) {
      navigate("/chat", { replace: true });
    }
  }, [navigate, errors, values]);

  return { values, handleInputChange, handleSubmit, errors };
};

export default useSignUp;
