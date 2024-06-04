import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 font-semibold gap-2">
          <li><Link className="py-3" to={"/allBikes"}>All Bikes</Link></li>
          <li><Link className="py-3"  to={"/about"}>About Us</Link></li>
          <li><Link className="py-3"  to={"/contact"}>Contact Us</Link></li>
          <li><Link className="py-3"  to={"/dashboard"}>Dashboard</Link></li>
          <li><Link to={"/login"} className="btn btn-success text-white">Log In</Link></li>
        </ul>
      </div>
      
      <Link to={"/"} className="btn btn-ghost text-xl"><img src="https://i.ibb.co/FmPbC6q/green-energy-9330-1.png" alt="" /> Thunder <span className="text-green-600">Moto</span> Mart</Link>
        
    </div>
    <div className="navbar-end hidden md:flex">
      <ul className="menu menu-horizontal px-1 gap-2 items-center font-semibold">
      <li><Link to={"/allBikes"}>All Bikes</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li><Link className="py-3"  to={"/dashboard"}>Dashboard</Link></li>
          <li><Link to={"/login"} className="btn btn-success text-white">Log In</Link></li>
      </ul>
    </div>
    </div>
  )
}
