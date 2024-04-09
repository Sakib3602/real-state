import { useContext,  useState } from "react";
import { useForm } from "react-hook-form";
import { Link  } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate ,  useLocation } from "react-router-dom";
const LogIn = () => {
  const [error, setError] = useState(null);
  const { signInEmailPassword, google , github, person} = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const location = useLocation();

  const onSubmit = (data) => {
    const { email, password } = data;
    setError("");

    // email password sign in
    signInEmailPassword(email, password)
      .then((result) => {
        console.log("log in", result);
        navigate(location.state);
        toast(`Log In Succesfull.`);
      })
      .catch((error) => {
        setError(error.message);
      });


    //   



      
    
  };

  return (
    <div className="hero min-h-screen bg-base-200 pt-20 md:p-28 lg:p-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log In.</h1>
          <p className="py-6">
            Join us and unlock exclusive perks. Your journey begins with a
            simple registration. Dive into our community, connect with
            like-minded individuals, and access premium features tailored just
            for you. Sign up now and embark on a fulfilling experience!
          </p>

          <div className="flex flex-col lg:flex-row item-center space-y-4 lg:space-y-0 lg:p-0 lg:space-x-4">
            <button
              onClick={google}
              className="btn btn-full lg:btn-wide btn-outline"
            >
              Google
            </button>
            <button onClick={github} className="btn btn-full lg:btn-wide btn-outline">
              Github
            </button>
          </div>

          <Link className="hover:border-b-2  text-blue-700" to={"/register"}>
            <a>Not Register? Click Me.</a>
          </Link>
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* form start */}
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
              <label className="label ">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {error && <p className="text-red-600">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
