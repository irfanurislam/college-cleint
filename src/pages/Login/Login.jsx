import React, { useContext } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { AuthConext } from "../../Providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
const Login = () => {

const {signInNew,googleSignIn} = useContext(AuthConext)
const location = useLocation()

const navigate = useNavigate()
const from = location?.state?.from?.pathname || "/";

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInNew(email,password)
        .then(result =>{
          const loginUser = result.user
          console.log(loginUser)
          navigate(from, { replace: true });
        })
        .catch(error =>{
          console.log(error.message)
        })
    }

    const handleGoogleSign = () =>{
        googleSignIn()
        .then(result =>{
            const logedUser = result.user 
            console.log(logedUser)
            navigate(from, { replace: true });
        })
         .catch(error =>{
            console.log(error.message)
         })
    }





  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-[30rem] h-[25rem] max-w-xl shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
            </form>
            <Link to='/register' className="btn-link text-center">Dont have a account! Register here</Link>
            <div className="divider">Another Social </div>
            <div className="mb-8 px-8">
              <button
                onClick={handleGoogleSign}
                className="btn btn-block btn-outline bg-emerald-300"
              >
                <FcGoogle className="text-2xl mr-12" />
                <span>Google Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
