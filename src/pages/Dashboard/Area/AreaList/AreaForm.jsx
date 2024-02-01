import Nav from "../../Nav";
import Sidbar from "../../SidBar";
import FromDashBoard from "./FormDashBoard";

const AreaForm = () => {
  return (
    <div className=" ">
      <Nav></Nav>
      <div className="min-h-screen flex bg-gray-100">
        <Sidbar></Sidbar>
        <FromDashBoard></FromDashBoard>
      </div>
    </div>
  );
};

export default AreaForm;