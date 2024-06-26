import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashLayout from "../layouts/DashLayout";
import PrivateRoutes from "./PrivateRoutes";
import DashboardHome from "../dashboard/DashboardHome";
import ManageProducts from "../dashboard/ManageProducts";
import AddProducts from "../dashboard/AddProducts";
import AllBikes from "../pages/AllBikes";
import ProductInfo from "../components/products/ProductInfo";
import EditProduct from "../dashboard/EditProduct";
import AddBrands from "../dashboard/AddBrands";
import ManageBrand from "../dashboard/ManageBrand";
import EditBrand from "../dashboard/EditBrand";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

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
                path:'/allBikes/:id',
                element: <ProductInfo/>,
                loader: ({params})=>fetch(`http://localhost:5000/bikes/${params?.id}`)
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
            },
            {
                path:'allBikes',
                element:<AllBikes/>
            },
            {
                path:'profile',
                element:<PrivateRoutes>
                            <Profile/>
                     </PrivateRoutes>

            },
            {
                path:'edit-profile',
                element:<PrivateRoutes>
                            <EditProfile/>
                     </PrivateRoutes>

            },
            
        
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
        },
        {
            path:'manage-products/edit-products/:id',
            element: <EditProduct/>,
            loader: ({params}) => fetch(`http://localhost:5000/bikes/${params?.id}`)
        },
        {
            path:'manage-brands',
            element: <ManageBrand />
        },
        {
            path:'add-brands',
            element: <AddBrands />
        },
        {
            path:'manage-brands/edit-brand/:id',
            element: <EditBrand/>,
            loader: ({params}) => fetch(`http://localhost:5000/brand/${params?.id}`)
        }

       ]
    }
])

export default router;