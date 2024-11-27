import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FiEyeOff, FiEye } from "react-icons/fi";

const Login = () => {
    const {signInUser, signOutUser, signInWithGoogle, signInWithFacebook, user, loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInUser(email, password)
        .then((user) => {
            console.log(user.user)
            const redirectTo = location.state?.from || '/';
            navigate(redirectTo);
        })
        .catch(error => {
            console.log(error.message)
        })
        
    }
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("successfully log out")
                window.location.reload();
            })
            .catch((error) => console.log(error.message))
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
            
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook()
        .then(() => {
            
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    const [showPassword, setShowPassword] = useState(true)
    const handlePasswordToggle = e => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    return ( loading ? <h1>nahaz</h1> :
        <div className="min-h-screen px-5 xl:px-0 max-w-[1140px] mx-auto mb-[148px]">
          <div className="hero-content flex-col-reverse gap-y-10 lg:flex-row justify-between">
            <div className="text-center lg:text-left w-[460px]">
              <img src="/assets/images/login/login.svg" alt="" />
            </div>
            <div className="card bg-base-100 w-full lg:w-[611px] h-fit p-[30px] md:p-[75px]  shrink-0 border-[1px] border-[#D0D0D0] rounded-xl text-center">
              <h1 className="text-[#444] text-[40px] font-bold mb-[50px]">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label"><span className="label-text text-[#444]">Email</span></label>
                  <input name="email" type="email" placeholder="email" className="input input-bordered border-[#E8E8E8]" required disabled={user} defaultValue={user ? user.email : ''}
                  />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text text-[#444]">Password</span></label>
                  <div className="relative flex">
                    <input type={showPassword ? 'password' : 'text'} name="password" placeholder="Password" className="input input-bordered border-[#E8E8E8] w-full" required disabled={user} defaultValue={user ? '.............' : ''}
                    />
                    <button onClick={handlePasswordToggle} className={`absolute right-2 top-1/2 translate-y-[-50%] ${user ? 'hidden' : 'flex'}`}>{showPassword ? <FiEyeOff /> : <FiEye />}</button>
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className={`btn bg-[#FF3811] text-white hover:text-black ${user ? 'hidden' : 'flex'}`}>Login</button>
                  <button onClick={handleSignOut} className={`btn bg-[#FF3811] text-white hover:text-black ${user ? 'flex' : 'hidden'}`}>SignOut</button>
                </div>
              </form>
              <p className="text-[18px] text-[#444] font-medium text-center mt-[30px]">Or Sign In with</p>
              <div className="flex gap-4 justify-center mt-[30px]">
                <button onClick={handleFacebookSignIn} className="btn btn-circle border-none bg-[#F5F5F8]">
                    <img src="/assets/images/login/facebook.svg" alt="" />
                </button>
                <button className="btn btn-circle border-none bg-[#F5F5F8]">
                    <img src="/assets/images/login/linkedin.svg" alt="" />
                </button>
                <button onClick={handleGoogleSignIn} className="btn btn-circle border-none bg-[#F5F5F8]">
                    <img src="/assets/images/login/google.svg" alt="" />
                </button>
              </div>
              <p className="text-[18px] text-[#737373] mt-[50px]">Have an account?<Link to={'/signUp'} className="text-[#FF3811] font-semibold"> Sign Up</Link></p>
            </div>
          </div>
        </div>
    );  
};

export default Login;
