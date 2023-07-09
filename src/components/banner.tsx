const Banner: React.FC = () => {
  return (
    <div className="flex h-14 place-content-between items-center bg-gray-200 px-12 w-full text-xs md:text-base">
      <h1 className="">Introducing All houses and 10+ features</h1>
      <div className="flex place-content-around space-x-6">
        <button className="flex items-center space-x-4">
          <div className="relative h-10 w-10">
            <img
              className="w-full h-full object-cover"
              src="/assets/player.jpg"
              alt="Watch more about different houses films"
            />
          </div>
          <span className="text-sm text-gray-500">Watch the Rooms film</span>
        </button>
        <button className="text-sm text-gray-500">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
