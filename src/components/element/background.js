const Background = () => {
  return (
    <div className="flex h-screen w-screen bg-cover bg-center">
      <div className="bg-white w-3/4 h-full flex items-center justify-center"></div>
      <div className="absolute bottom-0 right-40 w-64 h-20 bg-yellow-400 rounded-tl-lg"></div>
      <div className="bg-yellow-400 w-1/4 h-full"></div>
    </div>
  );
};

export default Background;
