import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

export default function FacebookLogin() {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);

    const handleFacebookLogin = () => {
        signInWithFacebook();
    }
    
  return (
    <div>
        <button onClick={handleFacebookLogin} className='btn font-semibold'><img src="https://i.ibb.co/nbzQYxY/fb.png" alt="" className='w-[40px]' />Facebook</button>
    </div>
  )
}
