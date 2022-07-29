import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/");
  }
  return (
    <form
      className="card w-96 bg-base-100 shadow-2xl my-20 flex mx-auto"
      onSubmit={loginHandler}
    >
      <div className="card-body">
        <h2 className="text-center text-lg font-bold">Login</h2>
        {/* inputs */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="i.e: felicia@gmail.com"
            className="input input-bordered w-full max-w-xs"
            name="email"
            required
          />
          <label className="label">
            <span className="label-text-alt text-red-500">Error Messages</span>
          </label>
          {/* password */}
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
            name="password"
            required
          />
          <label className="label">
            <span className="label-text-alt text-red-500">Error Messages</span>
          </label>
        </div>
        <p>
          <span>Don't have an account? </span>
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </p>
      </div>
      <input
        className="btn btn-primary flex mx-auto my-5"
        type="submit"
        value="Login"
      />
    </form>
  );
};

export default Login;
