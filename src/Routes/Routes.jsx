
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/SignUp/Register";
import Login from "../pages/Login/Login";
import SingleCollege from "../pages/Home/Home/SingleCollege";
import College from "../pages/College/College";
import MyCollege from "../pages/Mycollege/MyCollege";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import AdmissionRoute from "../pages/Admission/AdmissionRoute";
import Admission from "../pages/Admission/Admission";
import MyProfile from "../pages/MyProfile/MyProfile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {

        path:'/',
        element:<Home></Home>
    },
     {

        path:'/college',
        element:<College></College>
    },
    {

        path:'/college/:id',
        element:<SingleCollege />,
        loader:({params}) => fetch(`https://college-server-rouge.vercel.app/college/${params.id}`)
        
    },
    {

        path:'/admission',
        element:<AdmissionRoute></AdmissionRoute>

    },
    {

        path:'/admissionform/:id',
        element:<PrivateRoute><Admission></Admission></PrivateRoute>,
        loader:({params}) => fetch(`https://college-server-rouge.vercel.app/college/${params.id}`)

    },
    {

        path:'/mycollege',
        element:<PrivateRoute><MyCollege /> </PrivateRoute>

    },
    {

        path:'/myprofile',
        element:<MyProfile></MyProfile>

    },
    {

        path:'/login',
        element:<Login />
    },
    {

        path:'/signup',
        element:<Register />
    },


]
  },
]);