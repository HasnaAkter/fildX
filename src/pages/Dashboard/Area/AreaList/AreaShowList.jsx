import Nav from "../../Nav";
import Sidbar from "../../SidBar";
import AreaShowListDashBoard from "./AreaShowListDashBoard";

const AreaShowList = () => {
  return (
    <div className=" ">
      <Nav></Nav>
      <div className="min-h-screen flex bg-gray-100">
        <Sidbar></Sidbar>
        <AreaShowListDashBoard></AreaShowListDashBoard>
      </div>
    </div>
  );
};

export default AreaShowList;
