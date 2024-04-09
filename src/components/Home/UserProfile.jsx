import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Link } from "react-router-dom";


const UserProfile = () => {
    const {person} = useContext(AuthContext)

    console.log(person,"jksncisi")
    return (
        <div className="min-h-[500px] w-[100%] m-auto rounded-lg ">
            <div className="pt-[110px] lg:pt-[138px] lg:pl-[90px] lg:mt-0 flex flex-col lg:flex-row ">
                <img className="h-full w-full lg:h-[360px] lg:w-[400px]" src={`${person.photoURL || "https://i.ibb.co/hCnXYpD/blank-profile-picture-973460-1280.png"}`} alt="" />

                <div className="ml-12 space-y-9">
                    <h1 className="text-[46px] font-[700]">Name : {person.displayName || "Not Set"}</h1>
                    <h1 className="text-[46px] font-[700]">Email : {person.email}</h1>
                    
                   <Link to={"/updateProfile"}><button className="btn mt-9 btn-outline btn-wide">Update Your Data</button></Link>
                </div>


















            </div>
           
        </div>
    );
};

export default UserProfile;