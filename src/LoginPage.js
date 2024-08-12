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
      <div className="flex-1 bg-white"></div>
    </div>
  );
};

export default Login;
