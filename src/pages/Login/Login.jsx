import { Link } from "react-router-dom";
import bgb from "../../assets/img_logo_icon/bgb.png";

const Login = () => {
  const bannerStyle = {
    backgroundImage: `url(${bgb})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="flex items-center h-screen w-full" style={bannerStyle}>
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 m-4 md:mx-auto">
        <p className="block w-full text-xl uppercase font-bold mb-4 text-center">
          Welcome Back!
        </p>
        <p className="block text-xs mb-1 text-center">
          Please login to your account
        </p>
        <form className="mb-4 p-5" action="/" method="post">
          <div className="mb-4">
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              placeholder="Password"
            />
          </div>
          <Link to="/login">
            <button className="rounded-lg px-4 mt-10 py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 w-full">
              Sign in
            </button>
          </Link>
        </form>
        <div className="text-center text-sm p-10">
          Don’t have any account?{" "}
          <Link to="/signup" className="text-blue-700">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
