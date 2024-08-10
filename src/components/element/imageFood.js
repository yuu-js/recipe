import food from '../foodimage-topaz-denoise-enhance-4x.jpeg';

const ImageFood = () => {
  return (
    <div className="p-3">
      <img src={food} alt="" className="rounded-lg" />
    </div>
  );
};

export default ImageFood;