import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(true);

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
    <div className="bg-sky-500 h-screen flex justify-center items-center flex-col">
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

      <div
        className={`w-4/5 md:w-3/5 lg:w-1/3 ${
          signUp ? "block" : "hidden"
        }  transition-all ease-in-out duration-300 delay-300 shadow-xl`}
      >
        <form className="space-y-10 py-8 border-2 border-slate-400 flex flex-col justify-center items-center mx-auto rounded-b-xl bg-white text-white transition-all ease-in-out duration-300">
          <div dir="rtl" className="relative z-0 w-4/5 group">
            <input
              type="text"
              name="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              نام
            </label>
          </div>
          <div dir="rtl" className="relative z-0 w-4/5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-4"
            >
              نام خانوادگی
            </label>
          </div>

          <div dir="rtl" className="relative z-0 w-4/5 group">
            <input
              type="email"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-1"
            >
              ایمیل
            </label>
          </div>
          <div dir="rtl" className="relative z-0 w-4/5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-2"
            >
              رمز عبور
            </label>
          </div>
          <div dir="rtl" className="relative z-0 w-4/5 group">
            <input
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-4"
            >
              تکرار رمز عبور
            </label>
          </div>

          <button
            type="submit"
            className="my-10 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-4/5 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ثبت نام
          </button>
        </form>
      </div>

      <div
        className={`w-4/5 md:w-3/5 lg:w-1/3 ${
          login ? "block" : "hidden"
        }  transition-all ease-in-out duration-300 delay-300 shadow-xl`}
      >
        <form className="space-y-10 py-8 border-2 border-slate-400 flex flex-col justify-center items-center mx-auto rounded-b-xl bg-white text-white transition-all ease-in-out duration-300">
          <div dir="rtl" className="relative z-0 w-4/5 group">
            <input
              type="email"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-1"
            >
              ایمیل
            </label>
          </div>
          <div dir="rtl" className="relative z-0 w-4/5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-2"
            >
              رمز عبور
            </label>
          </div>

          <button
            type="submit"
            className="my-10 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-4/5 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
