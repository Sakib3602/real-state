import { useContext, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const { emailPassword } = useContext(AuthContext);
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  // const navig = useNavigation();
  const onSubmit = (data) => {

    navigate("/login")
    setError("");
    const { email, password, Cpassword } = data;

    console.log(email);

    if (password !== Cpassword) {
      alert("Confirm Your Password");
      return;
    }

    // email password sign up

    emailPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
      });

    navig("/");
  };

  return (
    <div className="hero min-h-screen bg-base-200 pt-20 md:p-28 lg:p-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Here.</h1>
          <p className="py-6">
            Join us and unlock exclusive perks. Your journey begins with a
            simple registration. Dive into our community, connect with
            like-minded individuals, and access premium features tailored just
            for you. Sign up now and embark on a fulfilling experience!
          </p>

          <Link className="hover:border-b-2 text-blue-700" to={"/login"}>
            <a>All Ready Register? Log in.</a>
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
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("Cpassword", { required: true })}
                placeholder="Confirm password"
                className="input input-bordered"
              />
              {errors.Cpassword && (
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
    </div>
  );
};

export default Registration;
