import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/auth/GoogleLogin";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../firebase/firebase.config";
import FacebookLogin from "../components/auth/FacebookLogin";

export default function Login() {

const navigate = useNavigate();
const [userInfo] = useAuthState(auth);
const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);

const handleSingIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(email,password);
}

useEffect(()=>{
    if(userInfo){
        navigate('/')
    }
},[navigate,userInfo,loading]);



  return (
    <div className="container mx-auto">
        <h1 className=" text-3xl md:text-4xl font-bold text-center py-4 text-green-600">Login now!</h1>
        <div className="hero">
            <div className="hero-content flex-col gap-8 md:gap-24 lg:flex-row-reverse justify-between items-center">
                <div className="text-center lg:text-left basis-1/2">
                    <img src="https://i.ibb.co/VV6Kgv3/img2.jpg" />
                </div>

                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 basis-1/2">
                <form onSubmit={handleSingIn} className="card-body">
                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email"placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    
                </form>
                    <div className="mx-3">
                        <h3 className="my-4 text-center font-bold">Login with</h3>
                        <div className="flex gap-4 justify-between ">
                        <GoogleLogin />
                        <FacebookLogin/>
                        </div>
                    </div>
                    <div className="m-4 text-center">
                        <p>Don't have an account ?  <Link to={'/register'} className="label-text-alt link link-hover text-lg text-green-600 font-semibold"> Register</Link></p>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}
