import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../../assets/img_logo_icon/right-arrow.png";

const AreaShowListDashBoard = () => {
  const tableData = [
    { id: 1, area: "Area 1", region: "Region A" },
    { id: 2, area: "Area 2", region: "Region B" },
    { id: 3, area: "Area 3", region: "Region C" },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const [searchText, setSearchText] = useState("");

  const handleCheckboxChange = (id) => {
    const selectedIndex = selectedItems.indexOf(id);
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, id]);
    } else {
      const updatedSelection = [...selectedItems];
      updatedSelection.splice(selectedIndex, 1);
      setSelectedItems(updatedSelection);
    }
  };

  const isRowSelected = (id) => selectedItems.includes(id);

  const filteredData = tableData.filter(
    (item) =>
      item.area.toLowerCase().includes(searchText.toLowerCase()) ||
      item.region.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="flex-1 p-6 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-black p-4 md:pt-20">
          Area List
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <p className="text-black mb-2 md:mb-0">
            Geo <img className="h-5 inline" src={arrow} alt="" />{" "}
            <Link className="text-blue-500 inline">Geo List</Link>
          </p>
          <Link className="btn bg-blue-900 text-white inline text-center p-3 hover:bg-gray-600">
            + Create New
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-end md:justify-between">
            <input
              type="text"
              placeholder="Search..."
              className=" border p-2 rounded outline-none focus:shadow-outline "
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <select
              className="w-auto border rounded p-2 outline-none focus:shadow-outline"
              name="region"
              id="region"
            >
              <option value="">Select Sr. No</option>
              <option value="area1">1</option>
              <option value="area2">2</option>
              <option value="area3">3</option>
            </select>
          </div>

          <table className="min-w-full border-none bg-white mt-4">
            <thead>
              <tr>
                <th className="border p-2 hover:bg-gray-200 ">Select</th>
                <th className="border p-2 hover:bg-gray-200 ">Sl. No</th>
                <th className="border p-2 hover:bg-gray-200 ">Area</th>
                <th className="border p-2 hover:bg-gray-200 ">Region</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item.id}
                  className={isRowSelected(item.id) ? "bg-gray-200" : ""}
                >
                  <td className="border p-2">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.area}</td>
                  <td className="border p-2">{item.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default AreaShowListDashBoard;
