import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Button from "./components/element/button";
import ImagePerson from "./components/element/imagePerson";
import ImageFood from "./components/element/imageFood";
import Background from "./components/element/background";

const Home = () => {
  return (
    <div className="flex h-screen w-screen bg-cover bg-center">
      <div className="">
        <Background />
      </div>
      <div className="flex justify-between items-center">
        <div className="absolute top-0 left-10 flex space-x-6">
          <Button variant="font-bold transition duration-150 delay-50 text-blue-900 hover:bg-gray-300 hover:underline px-3 py-2 rounded">
            Home
          </Button>
          <Link to="/recipe">
            <Button variant="font-bold transition duration-150 delay-50 text-blue-900 hover:bg-gray-300 px-3 py-2 rounded">
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
      <div className="flex justify-between items-center">
        <div className="absolute top-0 right-20 flex items-center space-x-0">
          <div className="p-0 pr-0 w-16 h-16 rounded-full">
            <ImagePerson />
          </div>
          <Link to="/login">
          <Button variant="font-bold transition-colors duration-150 delay-50 hover:text-white text-black px-3 py-2 pl-0 rounded">
            Login
          </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="absolute bottom-4 right-64 flex items-center space-x-0">
          <div className="p-0 w-3 h-3 bg-green-500 rounded-full"></div>
          <div>
          <Button variant="font-bold text-black transition-colors duration-150 delay-50 hover:text-white px-3 py-2 pl-2 rounded">
              Chat Admin
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="absolute top-28 right-32 flex ">
          <div className="ml-auto w-2/6 h-2/5 rounded-full">
            <ImageFood />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="absolute top-56 left-20">
          <h1 className="text-6xl font-bold text-left text-blue-900">
            Discover Recipe
            <br />& Delicious Food
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="absolute bottom-80 left-20">
          <input
            type="text"
            className="text-sm bg-gray-300 focus:outline-none border rounded w-96 py-2 px-3 text-slate-700 placeholder: opacity-70"
            placeholder="Search Recipe"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
