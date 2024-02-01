const Sidebar = () => {
  return (
    <aside className="w-64 bg-white text-gray-500 p-6">
      <h2 className="text-xl  mt-20">MENU</h2>
      
      <nav className="mt-6">
        <a href="#" className="block py-2 text-gray-500 hover:text-blue-500">
        Geo Information
        </a>
        <a href="#" className="block py-2 text-gray-500 hover:text-blue-500">
        Region
        </a>
        <a href="#" className="block py-2 text-gray-500 hover:text-blue-500">
        Area
        </a>
      
      </nav>
    </aside>
  );
};

export default Sidebar;
