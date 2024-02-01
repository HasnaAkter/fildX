import { Link, useHistory } from "react-router-dom";
import bgb from "../../assets/img_logo_icon/bgb.png";
import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userId: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const history = useHistory();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      return;
    }

    try {
      const response = await axios.post(
        "https://staging-api.erpxbd.com/api/v1/users/signup",
        formData
      );

      console.log("Registration successful:", response.data);

      history.push("/login");
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  const bannerStyle = {
    backgroundImage: `url(${bgb})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="flex items-center justify-center w-screen h-auto"
      style={bannerStyle}
    >
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg m-4 md:mx-auto mt-36">
        <p className="text-xl uppercase font-bold mb-4 mt-10 text-center">
          Create Account
        </p>
        <p className="text-xs mb-1 text-center">
          Fill in the details below to create an account
        </p>
        <form className="mb-4 px-5" onSubmit={handleSubmit}>
          
          <Link to="/login">
            <button
              type="submit"
              className="rounded-lg px-4 mt-4 md:mt-10 py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 w-full"
              disabled={!isChecked}
            >
              Create Account
            </button>
          </Link>
        </form>
        <div className="text-center text-sm py-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700">
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
