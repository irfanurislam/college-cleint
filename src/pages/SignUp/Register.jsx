import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthConext } from "../../Providers/AuthProviders";

const Register = () => {

const navigate = useNavigate()
  const {newCreateUser,logOut} = useContext(AuthConext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()






      const onSubmit = (data) => {
        console.log(data);
        const {name,email,password} = data
        
        newCreateUser(email,password)
        .then(result =>{
          const logNewUser = result?.user ;
          console.log(logNewUser)
          navigate('/')
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
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nameil</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  required
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                    <span className="text-error">Name Must Be required</span>
                  )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                    <span className="text-error">Email is required</span>
                  )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                 {errors.password?.type === "minLength" && (
                    <p className="text-error">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-error">
                      Password must be less than 20 characters
                    </p>
                  )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register </button>
              </div>
            </div>
            </form>
            <Link to='/login' className="btn-link text-center">ALready have a account! Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
