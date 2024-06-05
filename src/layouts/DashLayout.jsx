import { useSignOut } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase/firebase.config";


export default function DashLayout() {

  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    const success  = await signOut();
    if(success){
       alert('Log Out!!');
    }
   };
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-black font-semibold flex flex-col justify-between">
                    {/* Sidebar content here */}
                    <div>
                      <li><Link to={"/dashboard"}>Dashboard</Link></li>
                      <li><Link to={"/dashboard/manage-products"}>Manage Products</Link></li>
                      <li><Link to={"/dashboard/add-products"}>Add Product</Link></li>
                      <li><Link to={"/dashboard/manage-brands"}>Manage Brands</Link></li>
                      <li><Link to={"/dashboard/add-brands"}>Add Brands</Link></li>
                    </div>
                    <div>
                      <li><Link to={"/"} className='mb-3'>Back to Home</Link></li>
                      <li><Link onClick={handleLogout} className="btn btn-error text-white">Log Out</Link></li>
                    </div>
                    
                    </ul>
  </div>
</div>
  )
}
