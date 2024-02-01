import { Link } from "react-router-dom";
import img from "../../../../assets/img_logo_icon/undraw_Login_re_4vu2 1.png";
import arrow from "../../../../assets/img_logo_icon/right-arrow.png";

const FromDashBoard= () => {
  return (
    <main className="flex-1 p-6 bg-gray-100">
      <br />
      <br />
      <h1 className="text-2xl font-bold mb-6 text-black p-4 md:pt-20">
        Area List
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <p className="text-black mb-2 md:mb-0">
          Area List <img className="h-5 inline" src={arrow} alt="" />{" "}
          <Link className="text-blue-500 inline">Geo List</Link>
        </p>
        <Link
          className="btn bg-blue-900 text-white inline text-center p-3 hover:bg-gray-600"
        >
          + Create New
        </Link>
      </div>

      <div className="grid col-span-6 mt-2">
        <div className="bg-white text-gray-500 p-4 rounded-md shadow-md">
          <div className="text-center">
            <img src={img} alt="" className="mx-auto mb-4" />
            <p>
              Currently, you have no data. <br />
              For the next step,{" "}
              <Link className="text-blue-500 hover:text-gray-500">
                Create Area
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FromDashBoard;
