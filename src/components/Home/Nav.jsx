import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import 'animate.css';
const Nav = () => {
  const { person, logout } = useContext(AuthContext);
  if (person) {
    console.log(person.displayName);
  }

  return (
    <div className="navbar absolute z-10 leg opacity-100 mt-5  lg:h-[100px] font-[700] rounded-3xl md:ml-20 lg:ml-0 md:w-[100%] lg:w-[90%] lg:left-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"} >Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}  >About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}  >Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/updateProfile"} >Update Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/userProfile"} >User Profile</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <a className=" lg:text-3xl animate__animated animate__bounceInDown ">DREAM-TULIP</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
          <li>
              <NavLink to={"/contact"}  >Contact</NavLink>
            </li>
         {
          person ?  <li>
          <NavLink to={"/updateProfile"}>Update Profile</NavLink>
        </li> : ""
         }
          <li>
            <NavLink to={"/userProfile"}>User Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/offer"}>Offers</NavLink>
          </li>
        </ul>
      </div>

      {/*  */}

      {person ? (
        <div className="ml-3">
          <button onClick={logout} className="btn btn-outline ">
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <div className="navbar-end">
            <Link to={"/login"}>
              <button className="btn  btn-outline ">Log In</button>
            </Link>
          </div>
          <div className="ml-3">
            <Link to={"/register"}>
              <button className="btn btn-outline ">Sign Up</button>
            </Link>
          </div>
        </div>
      )}

      {/*  */}
      <div className="dropdown dropdown-end ml-3">
        <div
          tabIndex={0}
          role="button"
          className=" avatar tooltip tooltip-bottom"
          data-tip={person ? person?.displayName : "User"}
        >
          <div className="w-10 rounded-full lg:mr-3">
            <img
              alt="Tailwind CSS Navbar component tool-tip"
              // src="https://i.ibb.co/hCnXYpD/blank-profile-picture-973460-1280.png"

              src={
                person
                  ? person.photoURL
                  : "https://i.ibb.co/hCnXYpD/blank-profile-picture-973460-1280.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
