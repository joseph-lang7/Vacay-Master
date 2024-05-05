const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen md:h-[700px] max-w-screen flex justify-center items-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <h1 className="text-white text-center  text-3xl md:text-6xl">
        Plan your next vacation with ease
      </h1>
    </div>
  );
};

export default Hero;
