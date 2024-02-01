import Nav from "../../Nav";
import Sidebar from "../../Sidebar";
import AreaShowListDashBoard from "./AreaShowListDashBoard";

const AreaShowList = () => {
  return (
    <div className=" ">
      <Nav></Nav>
      <div className="min-h-screen flex bg-gray-100">
        <Sidebar></Sidebar>
        <AreaShowListDashBoard></AreaShowListDashBoard>
      </div>
    </div>
  );
};

export default AreaShowList;
