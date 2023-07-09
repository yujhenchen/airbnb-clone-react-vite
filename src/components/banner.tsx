const Banner: React.FC = () => {
  return (
    <div className="flex h-14 place-content-between items-center bg-gray-200 px-12">
      <h1 className="">Introducing All houses and 10+ features</h1>
      <div
        className="flex place-content-around space-x-6"
        id="more-info-container"
      >
        <button className="flex items-center space-x-4">
          <div className="relative h-10 w-10">
            <img
              width={"100%"}
              height={"100%"}
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
