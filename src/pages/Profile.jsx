import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../firebase/firebase.config"
import { Link } from "react-router-dom"

export default function Profile() {
    const [user] = useAuthState(auth)
    console.log(user);
    
  return (
    <div className="container mx-auto">
        <div className="hero">
            <div className="hero-content gap-12 flex-col-2">
                <img src={user?.photoURL || "/public/placeholder.jpg"} className="flex-1 md:w-[450px]"  />
                <div className="flex-1 md:px-10 ">
                  <h1 className=" text-3xl md:text-xl text-violet-600 font-bold ">Name: {user?.displayName}</h1>
                  <p className="py-3 font-semibold">User Email: {user?.email}</p>
                  <p className="py-3 font-semibold">Phone Number: {user?.phoneNumber}</p>
                  <div className="flex gap-4 items-center ">
                    <div><Link to={'/edit-profile'}><button className="btn btn-success flex-1 text-white">Edit Profile</button></Link></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
