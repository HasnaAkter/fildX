import Nav from "../../Nav";

import Sidebar from "../../Sidebar";
import FormDashboard from "./FormDashBoard";

const RegionForm = () => {
  return (
    <div className=" ">
      <Nav></Nav>
      <div className="min-h-screen flex bg-gray-100">
        <Sidebar></Sidebar>
        <FormDashboard></FormDashboard>
      </div>
    </div>
  );
};

export default RegionForm;
