import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar leg bg-orange-200 h-[100px] font-[700] rounded-3xl w-[90%] m-auto">
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to={"/"}><a className="btn btn-ghost text-3xl">DIM-HOME</a></Link>
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
            <NavLink to={"/updateProfile"}>Update Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/userProfile"}>User Profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <Link to={"/login"}><button className="btn btn-outline btn-small">Log In</button></Link>
      </div>
      <div className="ml-3">
      <Link to={"/register"}><button className="btn btn-outline ">Sign Up</button></Link>
      </div>
      <div className="dropdown dropdown-end ml-3">
      <div tabIndex={0} role="button" className=" avatar tooltip tooltip-bottom" data-tip="hello" >
        
        <div className="w-10 rounded-full " >
          <img alt="Tailwind CSS Navbar component tool-tip" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default Nav;
