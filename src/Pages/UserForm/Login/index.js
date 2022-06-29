import useLogin from "../../../hooks/useLogin";

const Login = () => {
  const { values, handleInputChange, handleSubmit, errors } = useLogin();

  return (
    <div className="w-4/5 md:w-3/5 lg:w-1/3 transition-all ease-in-out duration-300 delay-300 shadow-xl">
      <form
        onSubmit={handleSubmit}
        className="space-y-10 py-8 border-2 border-slate-400 flex flex-col justify-center items-center mx-auto rounded-b-xl bg-white text-white transition-all ease-in-out duration-300"
      >
        <div dir="rtl" className="relative z-0 w-4/5 group">
          <input
            value={values.username}
            onChange={handleInputChange}
            type="text"
            name="username"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="username"
            className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-1"
          >
            نام کاربری
          </label>
          {errors.username && <p className="text-red-600">{errors.username}</p>}
          {errors.wrongUsername && (
            <p className="text-red-600">{errors.wrongUsername}</p>
          )}
        </div>
        <div dir="rtl" className="relative z-0 w-4/5 group">
          <input
            value={values.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-2"
          >
            رمز عبور
          </label>
          {errors.password && <p className="text-red-600">{errors.password}</p>}
          {errors.wrongPassword && (
            <p className="text-red-600">{errors.wrongPassword}</p>
          )}
          {errors.manyRequest && (
            <p className="text-red-600">{errors.manyRequest}</p>
          )}
        </div>

        <button
          type="submit"
          className="my-10 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-4/5 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ورود
        </button>
      </form>
    </div>
  );
};
export default Login;
