import "./index.css";
import { Link } from "react-router-dom";
import Button from "./components/element/button";
import FoodWork from "./components/element/foodworkImage";

const Token = () => {
  return (
    <div className="flex h-screen w-screen bg-cover bg-center">
      <div className="flex-1 bg-yellow-500 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50">
          <FoodWork />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <form className="w-3/4 max-w-md">
          <label
            htmlfor="email"
            className="block text-sm font-medium text-slate-600"
          >
            Code 6 digit
          </label>
          <input
            type="token"
            placeholder="0XXXXX"
            className="border p-2 w-full mb-4"
          />
          <Link to="/reset">
            <Button variant="bg-yellow-500 text-white transition-color duration-150 delay-50 hover:bg-yellow-600 hover:text-slate-200 py-2 px-4 w-full rounded">
              Reset Password
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Token;
