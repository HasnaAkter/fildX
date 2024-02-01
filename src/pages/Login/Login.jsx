import  { useState } from "react";
import { Link } from "react-router-dom";
import bgb from "../../assets/img_logo_icon/bgb.png";
import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call using axios
      const response = await axios.post(
        "https://staging-api.erpxbd.com/api/v1/users/login",
        formData
      );

      // Handle success, for example, redirect the user to a dashboard
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle error, show error message to the user
      console.error("Login failed:", error.response.data);
    }
  };

  const bannerStyle = {
    backgroundImage: `url(${bgb})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="flex items-center justify-center w-screen h-auto" style={bannerStyle}>
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 m-4 md:mx-auto mt-36">
        <p className="block w-full text-xl uppercase font-bold mt-10 mb-4 text-center">
          Welcome Back!
        </p>
        <p className="block text-xs mb-1 text-center">Please login to your account</p>
        <form className="mb-4 p-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <button className="rounded-lg px-4 mt-10 py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 w-full">
            Sign in
          </button>
        </form>
        <div className="text-center text-sm py-5">
          Don’t have any account?{" "}
          <Link to="/dashboard" className="text-blue-700">
            Sign Up
          </Link>
        </div>
        <br /> <br />
      </div>
    </div>
  );
};

export default Login;
