import Nav from "../../Nav";
import Sidebar from "../../Sidebar";
import RegionShowListDashBoard from "./RegionShowListDashBoard";

const RegionShowList = () => {
  return (
    <div className=" ">
      <Nav></Nav>

      <div className="min-h-screen flex bg-gray-100">
        <Sidebar></Sidebar>
        <RegionShowListDashBoard></RegionShowListDashBoard>
      </div>
    </div>
  );
};

export default RegionShowList;
