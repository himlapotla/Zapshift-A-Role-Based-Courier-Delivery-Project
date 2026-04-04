import { createBrowserRouter } from "react-router";
import RootlayOut from "../layout/RootlayOut";
import { Children } from "react";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/coverage";
import AuthLayOut from "../layout/AuthLayOut";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../pages/Rider/Rider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootlayOut> </RootlayOut>,
    children : [
      {
        index: true, 
        element: <Home> </Home>
      },
      {
        path: 'rider',
        element: <PrivateRoutes> <Rider> </Rider> </PrivateRoutes>
      },
      {
        path: 'coverage',
        element: <Coverage> </Coverage>,
        loader: () => fetch('service-center.json').then(res => res.json())
      }
    ]
  },

  {
    path:'/',
    element: <AuthLayOut> </AuthLayOut>,
    children:[
      {
        path: 'login',
        element: <Login> </Login>
      },

      {
        path: 'register',
        element: <Register> </Register>
      }
    ]
  }
  


])
