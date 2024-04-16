import { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
const Registration = () => {
  useEffect(() => {
    document.title = "DREAM_TULIP | Register Now";
  }, []);
  const navigate = useNavigate();
  const { emailPassword, update, logout } = useContext(AuthContext);
  const [error, setError] = useState();
  const [see, setSee] = useState(true);
  // eye function
  function SEE() {
    setSee(!see);
    console.log(see);
  }
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  // const navig = useNavigation();
  const onSubmit = (data) => {
    setError("");
    const { email, password, Cpassword, name, photo } = data;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!passwordPattern.test(password)) {
      toast.error("Use 1 uppercase and 1 lowercase!");
      // toast.success("ok,toast")
      console.log("dfdcf");
      return;
    }

    if (password !== Cpassword) {
      toast("Please Type Same Password !");
      return;
    }

    // email password sign up

    emailPassword(email, password)
      .then((result) => {
        console.log(result);
        update(name, photo)
          .then(() => {
            toast("Registration Done!");
          })
          .catch();

        logout();
      })
      .catch((error) => {
        setError(error.message);
      });

    navigate("/login");
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

        <div className="card shrink-0 w-full lg:w-[600px]  shadow-2xl bg-base-100">
          {/* form start */}
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>

            {/* photo url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo")}
                placeholder="Give Here Your Photo Url"
                className="input input-bordered"
              />
            </div>

            {/*  */}

            <div className="form-control">
              {/* try */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
              
                <input type={see ? "password" : "text"}
                  {...register("password", { required: true })}
                  className="  lg:w-[590px]"
                  placeholder="password"/>
               <FaEye onClick={SEE} className="text-[26px] ml-20 lg:ml-0 lg:text-[50px]"></FaEye>
              </label>
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
            
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("Cpassword", { required: true })}
                placeholder="Confirm Password"
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
