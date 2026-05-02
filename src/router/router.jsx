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
import SendParcel from "../pages/SendParcel/SendParcel";
import DashBoardLayout from "../layout/DashBoardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import { PaymentCanceled } from "../pages/Dashboard/Payment/PaymentCanceled";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import ApproveRider from "../pages/Dashboard/ApproveRider/ApproveRider";
import UserManagement from "../pages/Dashboard/UserManagement/UserManagement";
import AdminRoutes from "./AdminRoutes";
import AssignRider from "../pages/Dashboard/AssignRider/AssignRider";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootlayOut> </RootlayOut>,
    children: [
      {
        index: true,
        element: <Home> </Home>
      },
      {
        path: 'rider',
        element: <PrivateRoutes> <Rider> </Rider> </PrivateRoutes>,
        loader: () => fetch('service-center.json').then(res => res.json())
      },
      {
        path: 'send-parcel',
        element: <PrivateRoutes> <SendParcel> </SendParcel> </PrivateRoutes>,
        loader: () => fetch('service-center.json').then(res => res.json())
      },
      {
        path: 'coverage',
        element: <Coverage> </Coverage>,
        loader: () => fetch('service-center.json').then(res => res.json())
      }
    ]
  },

  {
    path: '/',
    element: <AuthLayOut> </AuthLayOut>,
    children: [
      {
        path: 'login',
        element: <Login> </Login>
      },

      {
        path: 'register',
        element: <Register> </Register>
      }
    ]
  },

  {
    path: 'dashboard',
    element: <PrivateRoutes> <DashBoardLayout> </DashBoardLayout> </PrivateRoutes>,
    children: [
      {
        path: 'my-parcels',
        element: <MyParcels> </MyParcels>
      },
      {
        path: 'payment/:parcelId',
        element: <Payment> </Payment>,
        // loader: ({ params }) => axios.get(`/one-parcel/${params.parcelId}`).then(res => res.data)
        // for the dynamic routes params are values from the URL.
      },
      {
        path: 'payment-success',
        element: <PaymentSuccess> </PaymentSuccess>
      },
      {
        path: 'payment-canceled',
        element: <PaymentCanceled> </PaymentCanceled>,
      },
      {
        path: 'payment-history',
        element: <PaymentHistory> </PaymentHistory>
      },
      {
        path: 'approve-rider',
        element: <AdminRoutes> <ApproveRider> </ApproveRider> </AdminRoutes>
      },
      {
        path: 'user-management',
        element: <AdminRoutes> <UserManagement> </UserManagement> </AdminRoutes>
      },
      {
        path: 'assign-rider',
        element: <AdminRoutes> <AssignRider> </AssignRider> </AdminRoutes>
      }
    ]
  }



])
