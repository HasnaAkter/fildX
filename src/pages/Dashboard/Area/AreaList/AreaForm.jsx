import Nav from "../../Nav";
import Sidebar from "../../Sidebar";
import FromDashBoard from "./FormDashBoard";

const AreaForm = () => {
  return (
    <div className=" ">
      <Nav></Nav>
      <div className="min-h-screen flex bg-gray-100">
        <Sidebar></Sidebar>
        <FromDashBoard></FromDashBoard>
      </div>
    </div>
  );
};

export default AreaForm;
