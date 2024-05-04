import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const RegisterPage = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="rounded-lg flex flex-col items-center p-4">
        <h1 className="text-black text-3xl text-center pb-5 mt-5">Register</h1>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
            noValidate
          >
            <input
              className="p-3 border-2 rounded-md w-[250px] md:w-[500px] focus:border-slate-800 focus:shadow-lg"
              placeholder="First Name"
              type="text"
              id="firstName"
              {...register("firstName", {
                required: { value: true, message: "First name is required." },
              })}
              title="First Name"
            />
            <p className="text-red-500 mb-2">{errors.firstName?.message}</p>
            <input
              className="p-3 border-2 rounded-md w-[250px] md:w-[500px] focus:border-slate-800 focus:shadow-lg"
              placeholder="Last Name"
              type="text"
              id="lastName"
              title="Last Name"
              {...register("lastName", {
                required: { value: true, message: "Last name is required" },
                pattern: {
                  value: "",
                  message: "Invalid email format",
                },
              })}
            />
            <p className="text-red-500 mb-2">{errors.lastName?.message}</p>
            <input
              className="p-3 border-2 rounded-md w-[250px] md:w-[500px] focus:border-slate-800 focus:shadow-lg"
              placeholder="Email"
              type="text"
              id="email"
              title="Email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
            />
            <p className="text-red-500 mb-2">{errors.email?.message}</p>
            <input
              className="p-3 border-2 rounded-md w-[250px] md:w-[500px] focus:border-slate-800 focus:shadow-lg "
              placeholder="Password"
              type="password"
              id="password"
              title="Password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
            />
            <p className="text-red-500 mb-2">{errors.password?.message}</p>
            <button className="p-2 bg-slate-200">Submit</button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
