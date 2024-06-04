import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";

export default function PrivateRoutes({children}) {
    
    const [user,loading] = useAuthState(auth);

    if(loading){
        return <Loading/>
    }
    if(!user){
        return <Navigate to={'/login'}/>
    }
  return children;
}
