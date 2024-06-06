import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/auth/GoogleLogin";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import FacebookLogin from "../components/auth/FacebookLogin";

export default function Register() {

const navigate = useNavigate();
const [userInfo] = useAuthState(auth);

const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);

const[passMatch, setPassMatch] = useState(true);
const[message, setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value; 
    const confirmPassword = form.confirm_password.value;
    const name = form.name.value;
    const phone = form.name.value;


    if(password !== confirmPassword){
        setPassMatch(false);
    }
    
    if(password === confirmPassword){
        setMessage(
            <div role="alert" className="alert alert-success mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Successfully registered!</span>
            </div>
        );
        createUserWithEmailAndPassword(email,password,confirmPassword,name,phone);
        console.log(createUserWithEmailAndPassword);
    }
}

useEffect(()=>{
   if(userInfo){
    navigate('/');
   }
},[userInfo,navigate]);


  return (
    <div>
        <h1 className=" text-2xl md:text-3xl font-bold text-center py-4 text-green-600">Register now!</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col gap-8 md:gap-24 lg:flex-row-reverse justify-between items-center">
                <div className="text-center lg:text-left flex-1">
                    <img src="https://i.ibb.co/rFTvWB2/4934425.jpg" />
                </div>
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="tel" name="phoneNumber" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirm_password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {!passMatch && (
                                <div role="alert" className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Password do not match!!</span>
                            </div>
                                )}
                        <div className="form-control mt-6">
                            <button className="btn btn-success font-bold text-white">Register</button>
                            {message && <p>{message}</p>}
                        </div>

                        {error && <div role="alert" className="alert alert-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Email are already registered.</span>
                                </div>}
        
                    </form>
                    <div className="mx-3">
                        <h3 className="my-4 text-center font-bold">Register with</h3>
                        <div className="flex gap-4 justify-around ">
                        <GoogleLogin />
                        <FacebookLogin/>
                        </div>
                    </div>
                    <div className="m-4 text-center">
                        <p>Already have an account ?  <Link to={'/login'} className="label-text-alt link link-hover text-lg text-green-600 font-semibold"> Login</Link></p>
                    </div>
                    </div>
                </div>
                </div>
    </div>
  )
}
