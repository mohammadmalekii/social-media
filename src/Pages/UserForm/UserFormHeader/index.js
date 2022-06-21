const UserFormHeader = ({ login, setLogin, signUp, setSignUp }) => {
  const handleTab = (type) => {
    if (type === "login") {
      setSignUp(false);
      setLogin(true);
    } else {
      setSignUp(true);
      setLogin(false);
    }
  };
  return (
    <div className="text-white p-4 flex justify-center rounded-t-xl bg-blue-900 w-4/5 md:w-3/5 lg:w-1/3">
      <button
        className={`${
          signUp
            ? "bg-blue-700 hover:bg-blue-600 ease-in-out duration-300"
            : "bg-blue-400 hover:bg-blue-500 ease-in-out duration-300"
        }  w-full py-2 rounded-l-lg`}
        onClick={() => handleTab("signUp")}
      >
        عضویت
      </button>
      <button
        className={`${
          login
            ? "bg-blue-700 hover:bg-blue-600 ease-in-out duration-300"
            : "bg-blue-400 hover:bg-blue-500 ease-in-out duration-300"
        }  w-full py-2 rounded-r-lg`}
        onClick={() => handleTab("login")}
      >
        ورود
      </button>
    </div>
  );
};

export default UserFormHeader;
