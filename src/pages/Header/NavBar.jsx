import { Link } from "react-router-dom";
import logo from "../../assets/img_logo_icon/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 p-4 fixed w-full">
        <div className="navbar-start flex items-center px-4 md:px-10">
          <Link to="/">
            <button className="btn btn-ghost text-xl px-4 md:px-10">
              <img src={logo} alt="Logo" />
            </button>
          </Link>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <Link to="/login">
            <button className="rounded-lg py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
              Login
            </button>
          </Link>
          <Link to="/registration">
            <button className="drop-shadow-xl rounded-lg px-4 py-2 text-lg md:px-8 md:text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-100 duration-300">
              Registration
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
