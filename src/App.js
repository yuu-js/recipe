import "./index.css";
import Button from "./components/element/button";
import ImagePerson from "./components/element/imagePerson";

const App = () => {
  return (
    <div className="flex h-screen w-screen bg-cover bg-center">
      <div className="bg-white w-3/4 h-full flex items-center justify-center"></div>
      <div className="absolute bottom-0 right-40 w-64 h-20 bg-yellow-300 rounded-tl-lg"></div>
      <div className="bg-yellow-300 w-1/4 h-full"></div>
      <div className="flex justify-between items-center">
        <div className="absolute top-0 left-10 flex space-x-6">
          <Button variant="transition duration-300 delay-300 text-black hover:bg-gray-300 px-3 py-2 rounded">
            Home
          </Button>
          <Button variant="transition duration-300 delay-300 text-black hover:bg-gray-300 px-3 py-2 rounded">
            Add Recipe
          </Button>
          <Button variant="transition duration-300 delay-300 text-black hover:bg-gray-300 px-3 py-2 rounded">
            Profile
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="absolute top-0 right-20 flex ">
          <div className="pt-0 pr-0 w-16 h-16 rounded-full">
            <ImagePerson />
          </div>
          <Button variant="pt-5 pl-0 text-black px-3 py-2 rounded">
            Login
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="absolute bottom-4 right-72 flex ">
          <div>
          <Button variant="text-black px-3 py-2 rounded">
            Chat Admin
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
