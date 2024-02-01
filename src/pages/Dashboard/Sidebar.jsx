import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white text-gray-500 p-6">
      <h2 className="text-xl  mt-20">MENU</h2>
      
      <nav className="mt-6">
        <Link to="" className="block py-2 text-gray-500 hover:text-blue-500">
        Geo Information
        </Link>
        <Link to="" className="block py-2 text-gray-500 hover:text-blue-500">
        Region
        </Link>
        <Link to="" className="block py-2 text-gray-500 hover:text-blue-500">
        Area
        </Link>
      
      </nav>
    </aside>
  );
};

export default Sidebar;
