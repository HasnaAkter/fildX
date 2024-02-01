import { Link } from "react-router-dom";
import arrow from "../../../../assets/img_logo_icon/right-arrow.png";

const FormDashboard = () => {
  return (
    <main className="flex-1 p-6 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-black p-4 md:pt-20">
          Create Region
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <p className="text-black mb-2 md:mb-0">
            Geo <img className="h-5 inline" src={arrow} alt="" />
            <span>
              <Link className="inline">Geo List</Link>
            </span>{" "}
            <img className="h-5 inline" src={arrow} alt="" />
            <span>
              <Link className="text-blue-500 inline">Create Geo</Link>
            </span>
          </p>
          <Link className="btn bg-blue-900 text-white inline text-center p-3 hover:bg-gray-600">
            + Create New
          </Link>
        </div>

        <div className="grid col-span-6 mt-2">
          <div className="flex items-center justify-center">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
              <form className="mb-4" action="/" method="post">
                

                <div className="mb-4">
                  <label htmlFor="area" className="block text-xs mb-1">
                    Region
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Type Region"
                  />
                </div>

                <div className="flex items-end justify-end">
                  <button
                    className="bg-blue-900 hover:bg-gray-600 text-white text-sm font-semibold px-4 py-2 rounded"
                    type="submit"
                  >
                    Add Region
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormDashboard;
