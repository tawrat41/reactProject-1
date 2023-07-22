/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="ml-8 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register !</h1>
          <p className="py-6">
            Get ready to join our incredible community! We are excited to have you on board. Register now to unlock a world of exciting features, exclusive content, and endless opportunities. Your journey starts here, and we cannot wait to see all the amazing things you will achieve with us. Let uss create your account and begin this thrilling adventure together! Welcome to our family! 
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
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
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <Link to='/login' className="link link-accent">Already have an account? Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
