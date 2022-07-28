import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    setEmail(email);
    setPassword(password);
  };

  return (
    <form className="card w-96 bg-base-100 shadow-2xl my-20 flex mx-auto">
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
