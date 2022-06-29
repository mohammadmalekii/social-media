import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase.config";
import validate from "../Pages/UserForm/Login/validate";

const useLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({ error: "initError" });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors(validate(values));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);

    try {
      const responseFormAuth = await signInWithEmailAndPassword(
        auth,
        values.username,
        values.password
      );

      const userId = responseFormAuth.user.uid;

      // save users to localStorage or Redux
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: values.username,
          uid: userId,
        })
      );

      navigate("/chat", { replace: true });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrors({ wrongUsername: "این نام کاربری وجود ندارد" });
      }
      if (error.code === "auth/wrong-password") {
        setErrors({ wrongPassword: "این رمز عبور وجود ندارد" });
      }
      if (error.code === "auth/too-many-requests") {
        setErrors({ manyRequest: "درخواست ها به سرور بیش از حد بود" });
      }
    }
  };

  return { values, handleInputChange, handleSubmit, errors };
};

export default useLogin;
