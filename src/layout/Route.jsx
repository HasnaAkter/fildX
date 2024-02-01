import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import RegistrationForm from "../pages/Registration/RegistrationForm";
import AreaList from "../pages/Dashboard/Area/AreaList/AreaList";
import AreaFrom from "../pages/Dashboard/Area/AreaList/AreaFrom";
import RegionFrom from "../pages/Dashboard/Region/RegionList/RegionFrom";
import RegionList from "../pages/Dashboard/Region/RegionList/RegionList";
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
  path: "d",
  element: <AreaList></AreaList>,
 },
 {
  path: "dll",
  element: <RegionList></RegionList>,
 },
 {
  path: "areaFrom",
  element: <AreaFrom></AreaFrom>,
 }
 ,
 {
  path: "regionFrom",
  element: <RegionFrom></RegionFrom>,
 }
  
  
    
]);
