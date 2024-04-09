import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Authentication/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateProfile = () => {
  const { update } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, number, photo } = data;

    update(name, photo)
      .then(() => {
        toast("Updated Your Profile!");
      })
      .catch((error) => {
        toast("SomeThing Is Wrong!");
      });

    console.log(name, photo);
  };
  return (
    <div className="min-h-[500px] w-[100%] m-auto rounded-lg p-3 border">
      <div className="pt-[110px] lg:pt-[138px] lg:pl-[90px] lg:mt-0 flex flex-col lg:flex-row ">
        <div className="flex flex-col w-full  lg:w-[30%]">
          <h1 className="text-[48px] font-[700]">Update Your Profile.</h1>
          <p className="mb-4">
            Unlock the full potential of your digital presence by updating your
            profile. A current profile reflects your evolving journey,
            highlights your achievements, and opens doors to new opportunities.
            Make your first impression count, every time. Update now and keep
            your story fresh and engaging for all who discover you.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 m-auto border p-8 rounded-lg"
        >
          <label className="input input-bordered flex items-center gap-2 ">
            Name
            <input
              type="text"
              {...register("name")}
              className="  lg:w-[590px]"
              placeholder="Your Name"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Photo URL
            <input
              type="text"
              {...register("photo")}
              className=" lg:w-[590px]"
              placeholder="Give Only Url"
            />
          </label>

          <button className="btn btn-wide btn-outline">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
