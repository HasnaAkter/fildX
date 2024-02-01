import Nav from "../../Nav";
import Sidbar from "../../SidBar";
import RegionShowListDashBoard from "./RegionShowListDashBoard";

const RegionShowList = () => {
  return (
    <div className=" ">
      <Nav></Nav>

      <div className="min-h-screen flex bg-gray-100">
        <Sidbar></Sidbar>
        <RegionShowListDashBoard></RegionShowListDashBoard>
      </div>
    </div>
  );
};

export default RegionShowList;
