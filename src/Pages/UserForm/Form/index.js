import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import UserFormHeader from "../UserFormHeader";
import { useState } from "react";

const Form = () => {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="bg-sky-500 h-screen flex justify-center items-center flex-col">
      <UserFormHeader
        login={login}
        setLogin={setLogin}
        signUp={signUp}
        setSignUp={setSignUp}
      />

      {signUp && <SignUp />}
      {login && <Login />}
    </div>
  );
};

export default Form;
