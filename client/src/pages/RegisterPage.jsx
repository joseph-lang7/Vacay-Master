import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import uploadIcon from "/cloud-upload.svg";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const form = useForm();
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState, watch } = form;
  const password = watch("password");
  const { errors } = formState;
  const profileImage = watch("profileImage");

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const url = "http://localhost:3001/auth/register";
      const formData = new FormData();
      for (const key in data) {
        if (key === "profileImage") {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      }

      const fetchOptions = {
        method: "POST",
        body: formData,
      };
      const res = await fetch(url, fetchOptions);
      console.log(formData);

      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="w-auto max-h-4/6 flex justify-center items-center">
      <div className="rounded-lg flex flex-col items-center p-4 my-5">
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
                required: { value: true, message: "Last name is required." },
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
                required: { value: true, message: "Email is required." },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
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
                required: { value: true, message: "Password is required." },
              })}
            />
            <p className="text-red-500 mb-2">{errors.password?.message}</p>
            <input
              className="p-3 border-2 rounded-md w-[250px] md:w-[500px] focus:border-slate-800 focus:shadow-lg"
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              title="Confirm Password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
            />
            <p className="text-red-500 mb-2">
              {errors.confirmPassword?.message}
            </p>
            <input
              id="image"
              className="hidden"
              type="file"
              accept="image/*"
              {...register("profileImage", {
                required: {
                  value: true,
                  message: "Profile image is required.",
                },
              })}
            />
            <label
              htmlFor="image"
              className="flex flex-col text-center justify-center items-center cursor-pointer"
            >
              <img
                className="w-[50px] h-[50px]"
                src={uploadIcon}
                alt="Upload Icon"
              />
              Upload profile image
            </label>
            <div className="flex justify-center">
              {profileImage && profileImage[0] && (
                <img
                  src={URL.createObjectURL(profileImage[0])}
                  alt="profile photo"
                  className=" rounded-full w-[80px] h-[80px]"
                />
              )}
            </div>
            <p className="text-red-500 mb-2">{errors.profileImage?.message}</p>

            <button className="p-2 bg-slate-200 hover:bg-slate-700 hover:text-white transition-colors duration-300 rounded-md">
              Register
            </button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
