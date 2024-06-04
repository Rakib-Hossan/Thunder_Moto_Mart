import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashLayout from "../layouts/DashLayout";
import PrivateRoutes from "./PrivateRoutes";
import DashboardHome from "../dashboard/DashboardHome";
import ManageProducts from "../dashboard/ManageProducts";
import AddProducts from "../dashboard/AddProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:(
            <PrivateRoutes>
                     <DashLayout/>
            </PrivateRoutes>
       ),
       children: [
        {
            index : true,
            element : <DashboardHome/>
        },
        {
            path:'manage-products',
            element: <ManageProducts />
        },
        {
            path:'add-products',
            element: <AddProducts />
        }
       ]

    }
])

export default router;