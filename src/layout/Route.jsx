import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import RegistrationForm from "../pages/Registration/RegistrationForm";
import AreaList from "../pages/Dashboard/Area/AreaList/AreaList";
import Dashboard from "../layout/Dashboard";
import AreaForm from "../pages/Dashboard/Area/AreaList/AreaForm";
import AreaShowList from "../pages/Dashboard/Area/AreaList/AreaShowList";
import RegionForm from "../pages/Dashboard/Region/RegionList/RegionForm";
import RegionList from "../pages/Dashboard/Region/RegionList/RegionList";
import RegionShowList from "../pages/Dashboard/Region/RegionList/RegionShowList";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'registration',
        element:<RegistrationForm></RegistrationForm>
      },
      
      
      
    ]
  },

 {
  path: "dashboard",
  element: <Dashboard></Dashboard>},
  
    {
      path: "area",
      element: <AreaList></AreaList>,
    },
    {
      path: "region",
      element: <RegionList></RegionList>,
     },
     {
      path: "areaForm",
      element: <AreaForm></AreaForm>,
     }
     ,
     {
      path: "regionForm",
      element: <RegionForm></RegionForm>,
     }
     ,
     {
      path: "areashowlist",
      element: <AreaShowList></AreaShowList>,
     },
      
     {
      path: "regionshowlist",
      element: <RegionShowList></RegionShowList>,
     }
      


  
    
]);
