
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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h2>this is is error</h2>,
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
        // loader:({params}) => fetch(`http://localhost:5000/college/${params.id}`)
        
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