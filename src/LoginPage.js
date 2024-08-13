import "./index.css";
import { Link } from "react-router-dom";
import Button from "./components/element/button";
import FoodWork from "./components/element/foodworkImage";

const Login = () => {
  return (
    <div className="flex h-screen w-screen bg-cover bg-center">
      <div className="flex-1 bg-yellow-500 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50">
          <FoodWork />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <form className="w-3/4 max-w-md">
          <h2 className="text-2xl font-bold text-yellow-500 text-center mb-1">
            Welcome
          </h2>
          <h1 className="text-1xl text-slate-500 text-center mb-7">
            Login to your account
          </h1>
          <label
            htmlfor="email"
            className="block text-sm font-medium text-slate-600"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Example12@gmail.com"
            className="border p-2 w-full mb-4"
          />
          <label
            htmlfor="password"
            className="block text-sm font-medium text-slate-600"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="example123"
            className="border p-2 w-full mb-4"
          />
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox accent-yellow-500" />
              <span className="ml-2">Agree to terms & conditions</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 w-full rounded"
          >
            Login
          </button>
          <div className="mt-2 text-center">
            <p>
              <a href="#" className="text-blue-500">
                Forgot Password?
              </a>
            </p>
            <p className="mt-5">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
