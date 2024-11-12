import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // 
    signInUser(email, password)
    .then(result => {
      console.log(result.user)
      e.target.reset();
      navigate('/')
    })
    .catch(error => {
      console.log("Error: ", error.massage)
    })
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user)
      navigate('/')
    })
    .catch(error => {
      console.log("Error: ", error.massage)
    })
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center">
            <h1 className="text-3xl mt-5 font-bold">Login now!</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mx-5 my-4">
            New to this website? Please{" "}
            <Link to="/register" className="underline font-bold">
              Register
            </Link>
          </p>
          <p className="text-center mb-3">
            <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
