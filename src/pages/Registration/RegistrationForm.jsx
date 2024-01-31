import { Link } from "react-router-dom";
import bgb from "../../assets/img_logo_icon/bgb.png";
import { useState } from "react";

const RegistrationForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const bannerStyle = {
    backgroundImage: `url(${bgb})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="flex items-center justify-center w-screen h-auto "
      style={bannerStyle}
    >
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg  m-4 md:mx-auto mt-36">
        <p className="text-xl uppercase font-bold mb-4 mt-10 text-center">
          Create Account
        </p>
        <p className="text-xs mb-1 text-center">
          Fill in the details below to create an account
        </p>
        <form className="mb-4 px-5" action="/" method="post">
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="number"
              placeholder="Your ID"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="number"
              placeholder="Your Mobile Number"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Select Your Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            >
              <option value="" defaultValue>
                Choose a role
              </option>
              <option value="role1">Role 1</option>
              <option value="role2">Role 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2 text-sm text-gray-500">
                I read and agree to the{" "}
                <span className="text-indigo-500">Terms & Conditions</span>
              </span>
            </label>
          </div>
          <Link to="/login">
            <button
              className="rounded-lg px-4 mt-4 md:mt-10 py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 w-full"
              disabled={!isChecked}
            >
              Create Account
            </button>
          </Link>
        </form>
        <div className="text-center text-sm py-5 ">
          Already have an account?{" "}
          <Link to="/signup" className="text-blue-700">
            Sign In
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default RegistrationForm;
