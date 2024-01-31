import logo from "../../assets/img_logo_icon/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 p-4 fixed">
        <div className="navbar-start flex items-center">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <button className="rounded-lg px-4 py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
            Login
          </button>
          <button className=" drop-shadow-xl rounded-lg px-4 py-2 text-lg md:px-8 md:text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-100 duration-300">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
