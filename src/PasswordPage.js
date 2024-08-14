import "./index.css";
import { Link } from "react-router-dom";
import Button from "./components/element/button";
import FoodWork from "./components/element/foodworkImage";

const Password = () => {
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
          Forgot Password?
          </h2>
          <h1 className="text-1xl text-slate-500 text-center mb-9">
          We just need your registered e-mail address
          <br />to send your password resend
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
          <Link to="/token">
            <Button variant="bg-yellow-500 text-white transition-color duration-150 delay-50 hover:bg-yellow-600 hover:text-slate-200 py-2 px-4 w-full rounded">
              Send E-mail
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Password;
