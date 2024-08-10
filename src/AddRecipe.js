import "./index.css";
import { Link } from "react-router-dom";
import Button from "./components/element/button";

const Recipe = () => {
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
          <Button variant="font-bold transition duration-150 delay-50 text-blue-900 hover:bg-gray-300 hover:underline px-3 py-2 rounded">
            Add Recipe
          </Button>
          </Link>
          <Link to="/profile">
          <Button variant="font-bold transition duration-150 delay-50 text-blue-900 hover:bg-gray-300 px-3 py-2 rounded">
            Profile
          </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute left-120 top-16">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <button className="w-150 h-32 text-sm bg-gray-300 focus:outline-none border rounded text-slate-700 placeholder:opacity-70">
            Add Photo
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute left-120 top-52">
          <input
            type="text"
            className="w-150 h-10 text-sm bg-gray-300 focus:outline-none border rounded text-slate-900 placeholder:text-gray-700 placeholder:pl-4"
            placeholder="Title"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute left-120 top-64">
          <input
            type="text"
            className="w-150 h-52 text-sm bg-gray-300 focus:outline-none border rounded text-slate-900 placeholder:text-gray-700 placeholder:pl-4"
            placeholder="Ingredients"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute left-120 bottom-56">
          <input
            type="url"
            className="w-150 h-10 text-sm bg-gray-300 focus:outline-none border rounded text-slate-900 placeholder:text-gray-700 placeholder:pl-4"
            placeholder="Video"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute left-160 bottom-36">
          <Link to="/">
            <Button variant="font-bold bg-yellow-400 transition duration-150 delay-50 text-blue-900 hover:bg-yellow-500 px-3 py-2 rounded">
              Post
            </Button>
          </Link>
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

export default Recipe;
