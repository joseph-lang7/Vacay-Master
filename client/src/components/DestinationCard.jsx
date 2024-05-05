const DestinationCard = ({ imagePath, title }) => {
  return (
    <div
      className="bg-cover bg-center h-[350px] w-[350px]"
      style={{ backgroundImage: `url("/${imagePath}")` }}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default DestinationCard;
