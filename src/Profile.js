import "./index.css";
import { Link } from "react-router-dom";
import Button from "./components/element/button";

const Profil = () => {
  return (
    <div className="flex h-screen w-screen bg-cover bg-center">
      <div className="bg-white"></div>
      <div className="flex justify-between items-center">
        <div className="absolute top-0 left-10 flex space-x-6">
          <Link to="/">
            <Button variant="font-bold transition duration-150 delay-50 text-blue-900 hover:bg-gray-300 px-3 py-2 rounded">
              Home
            </Button>
          </Link>
          <Link to="/recipe">
            <Button variant="font-bold transition duration-150 delay-50 text-blue-900 hover:bg-gray-300 px-3 py-2 rounded">
              Add Recipe
            </Button>
          </Link>
          <Button variant="font-bold transition duration-150 delay-50 text-blue-900 hover:bg-gray-300 px-3 py-2 rounded">
            Profile
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 w-screen h-24 bg-yellow-400 rounded-tl-lg"></div>
      <div className="flex justify-between items-center">
        <h1 className="absolute left-155 bottom-7 text-2xl font-bold text-center text-blue-900">
          Eat, Cook, Repeat
        </h1>
      </div>
    </div>
  );
};

export default Profil;
