import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/");
  }
  const registerHandler = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <form
      className="card w-96 bg-base-100 shadow-2xl my-20 flex mx-auto"
      onSubmit={registerHandler}
    >
      <div className="card-body">
        <h2 className="text-center text-lg font-bold">Register</h2>
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
          <span>Already have an account?</span>{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
      <input
        className="btn btn-primary flex mx-auto my-5"
        type="submit"
        value="Register"
      />
    </form>
  );
};

export default Register;
