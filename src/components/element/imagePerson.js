import personFill from '../person fill.jpg';

const ImagePerson = () => {
  return (
    <div className="p-4 rounded-full">
      <img src={personFill} alt="" className="p-0 rounded-full" />
    </div>
  );
};

export default ImagePerson;