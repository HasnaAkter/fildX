import Nav from "../../Nav";

import Sidebar from "../../Sidebar";
import Dashboard from "./Dashboard";

const RegionList = () => {
  return (
    <div className=" ">
      <Nav></Nav>
      <div className="min-h-screen flex bg-gray-100">
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};

export default RegionList;
