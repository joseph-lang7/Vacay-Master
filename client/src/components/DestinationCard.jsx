import { Link } from "react-router-dom";
const DestinationCard = ({ imagePath, title }) => {
  return (
    <Link className="" to="/">
      <div
        className="bg-cover bg-center h-[350px] w-[350px] hover:scale-110 transition-all duration-300 hover:shadow-lg flex justify-center items-center"
        style={{ backgroundImage: `url("/${imagePath}")` }}
      >
        <h2 className="text-white text-2xl">{title}</h2>
      </div>
    </Link>
  );
};

export default DestinationCard;
