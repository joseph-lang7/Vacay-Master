import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "../redux/state";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const form = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      const url = "http://localhost:3001/auth/login";
      const fetchOptions = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      };
      const res = await fetch(url, fetchOptions);
      const loggedIn = await res.json();

      if (res.ok && loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-auto max-h-4/6 flex justify-center items-center">
      <div className="rounded-lg flex flex-col items-center p-4 my-5">
        <h1 className="text-black text-3xl text-center pb-5 mt-5">Login</h1>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
            noValidate
          >
            <input
              className="p-3 border-2 rounded-md w-[250px] md:w-[500px] focus:border-slate-800 focus:shadow-lg"
              placeholder="Email"
              type="text"
              id="email"
              {...register("email", {
                required: { value: true, message: "Email is required." },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
            />
            <p className="text-red-500 mb-2">{errors.email?.message}</p>
            <input
              className="p-3 border-2 rounded-md w-[250px] md:w-[500px] focus:border-slate-800 focus:shadow-lg"
              placeholder="Password"
              type="password"
              id="password"
              {...register("password", {
                required: { value: true, message: "Password is required." },
              })}
            />
            <p className="text-red-500 mb-2">{errors.password?.message}</p>
            <Link to="/register" className="underline hover:no-underline mb-3">
              Don&apos;t have an account? Register
            </Link>
            <button className="p-2 bg-slate-200 hover:bg-slate-700 hover:text-white transition-colors duration-300 rounded-md">
              Login
            </button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
