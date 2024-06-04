import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

export default function Navbar() {

  const [user] = useAuthState(auth);
  const [signOut] =useSignOut(auth);

  const handleLogout = async () => {
    const success = await signOut();
    if(success){
      <div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Logged Out!</span>
        </div>
    }
  }

  return (
    <div className="navbar bg-base-100 justify-between">
    <div className="navbar-start">
      {
        user?.email?(
          <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 font-semibold gap-2">
            <li><Link className="py-3" to={"/allBikes"}>All Bikes</Link></li>
            <li><Link className="py-3"  to={"/about"}>Services</Link></li>
            <li><Link className="py-3"  to={"/contact"}>Blogs</Link></li>
            <li><Link className="py-3"  to={"/contact"}>Contact Us</Link></li>
            <li><Link className="py-3"  to={"/dashboard"}>Dashboard</Link></li>
          </ul>
      </div>
        ):(
          <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 font-semibold gap-2">
            <li><Link className="py-3" to={"/allBikes"}>All Bikes</Link></li>
            <li><Link className="py-3"  to={"/about"}>Services</Link></li>
            <li><Link className="py-3"  to={"/contact"}>Blogs</Link></li>
            <li><Link className="py-3"  to={"/contact"}>Contact Us</Link></li>
          </ul>
      </div>
        )
      }
      
      <Link to={"/"} className="btn btn-ghost text-xs md:text-xl"><img src="https://i.ibb.co/FmPbC6q/green-energy-9330-1.png" className="w-4 md:w-6" alt="" /> Thunder <span className="text-green-600">Moto</span></Link>
        
    </div>
    {
      user?.email?(
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 items-center font-semibold">
              <li><Link to={"/allBikes"}>All Bikes</Link></li>
              <li><Link className="py-3"  to={"/about"}>Services</Link></li>
              <li><Link className="py-3"  to={"/contact"}>Blogs</Link></li>
              <li><Link to={"/contact"}>Contact Us</Link></li>
              <li><Link className="py-3"  to={"/dashboard"}>Dashboard</Link></li>
          </ul>
    </div>
      ):(
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 items-center font-semibold">
              <li><Link to={"/allBikes"}>All Bikes</Link></li>
              <li><Link className="py-3"  to={"/about"}>Services</Link></li>
              <li><Link className="py-3"  to={"/contact"}>Blogs</Link></li>
              <li><Link to={"/contact"}>Contact Us</Link></li>
          </ul>
    </div>
      )
    }

    {!user?.email ?(
                <div className="navbar-end">
                <Link to={'/login'} className="btn btn-success text-white">Log in</Link>
                </div>
            ):(
                <div className="navbar-end gap-4">
                
                <Link to={'/dashboard'}>
                <div className="avatar">
                    <div className="w-5 md:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL || "/public/placeholder.jpg"} />
                    </div>
                </div>
                </Link>
                <Link onClick={handleLogout} className="btn btn-error text-white text-xs md:text-base">Log Out</Link>
                </div>
                
            )}
    </div>
  )
}
