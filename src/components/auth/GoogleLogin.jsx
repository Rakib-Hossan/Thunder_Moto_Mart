import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';

export default function GoogleLogin() {

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleGoogleLogin = () =>{
      signInWithGoogle();
    };
 
  return (
    <div>
        <button onClick={handleGoogleLogin} className='btn font-semibold'><img src="https://i.ibb.co/K5p99pX/img41.png" alt="" className='w-[50px]' />Google</button>
    </div>
  )
}
