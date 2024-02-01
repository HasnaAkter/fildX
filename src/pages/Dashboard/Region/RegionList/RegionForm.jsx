import Nav from "../../Nav";

import Sidbar from "../../SidBar";
import FormDashboard from "./FormDashBoard";

const RegionForm = () => {
  return (
    <div className=" ">
      <Nav></Nav>
      <div className="min-h-screen flex bg-gray-100">
        <Sidbar></Sidbar>
        <FormDashboard></FormDashboard>
      </div>
    </div>
  );
};

export default RegionForm;
