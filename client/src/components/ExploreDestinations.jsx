import DestinationCard from "./DestinationCard";

const ExploreDestinations = () => {
  return (
    <div className="mt-12 flex justify-center items-center">
      <div className=" max-w-[1500px] flex flex-col justify-center items-center">
        <h2 className="text-center text-4xl mb-8">Explore Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
          <DestinationCard title="Card" imagePath="hero-bg.png" />
          <DestinationCard title="Card" imagePath="hero-bg.png" />
          <DestinationCard title="Card" imagePath="hero-bg.png" />
          <DestinationCard title="Card" imagePath="hero-bg.png" />
        </div>
      </div>
    </div>
  );
};

export default ExploreDestinations;
