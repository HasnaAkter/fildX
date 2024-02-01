
import Nav from '../../Nav';

import Sidbar from '../../SidBar';
import Dashboard from './DashBoard';

const AreaList = () => {
  return (
    <div className=" ">
    <Nav></Nav>

      <div className="min-h-screen flex bg-gray-100">
        <Sidbar></Sidbar>
        <Dashboard></Dashboard>
        
      </div>
    </div>
  );
};

export default AreaList;
