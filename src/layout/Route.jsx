import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import RegistrationForm from "../pages/Registration/RegistrationForm";
import DeshBoard from "../pages/AreaList/DeshBorad";
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
      {
        path:'deshboard',
        element: <DeshBoard></DeshBoard>
      },
    ]
  },
    
]);
