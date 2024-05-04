import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const RegisterPage = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[350px] h-[650px] sm:w-[400px] md:w-[600px] bg-black rounded-lg flex flex-col items-center  justify-center">
        <div>
          <h1 className="text-white text-3xl text-center pb-5">Register</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
            noValidate
          >
            <input
              className="p-3 rounded-md w-[250px] md:w-[500px] "
              placeholder="First Name"
              type="text"
              id="firstName"
              {...register("firstName")}
              title="First Name"
            />
            <input
              className="p-3 rounded-md "
              placeholder="Last Name"
              type="text"
              id="lastName"
              title="Last Name"
              {...register("lastName")}
            />
            <input
              className="p-3 rounded-md "
              placeholder="Email"
              type="text"
              id="email"
              title="Email"
              {...register("email")}
            />
            <input
              className="p-3 rounded-md "
              placeholder="Password"
              type="password"
              id="password"
              title="Password"
              {...register("password")}
            />
            <input
              className="p-3 rounded-md "
              placeholder="Confirm Password"
              type="password"
              {...register("confirmPassword")}
              title="Confirm Password"
              id="confirmPassword"
            />
            <button className="p-2 bg-slate-200">Submit</button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
