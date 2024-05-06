import DestinationCard from "./DestinationCard";

const ExploreDestinations = () => {
  return (
    <div className="mt-12 flex justify-center items-center">
      <div className=" max-w-[1500px] flex flex-col justify-center items-center">
        <h2 className="text-center text-4xl mb-8">Explore Destinations</h2>
        <p className="text-xl mb-8 text-center px-2">
          Explore our wide range of vacation destination to find the perfect
          spot for your next vacation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5">
          <DestinationCard title="Beach" imagePath="beach.png" />
          <DestinationCard title="Country" imagePath="country.png" />
          <DestinationCard title="Island" imagePath="island.png" />
          <DestinationCard title="City" imagePath="city.png" />
        </div>
      </div>
    </div>
  );
};

export default ExploreDestinations;
