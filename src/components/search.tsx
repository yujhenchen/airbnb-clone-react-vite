const Search: React.FC = () => {
  return (
    <div className="w-120 relative box-border flex h-14 items-center justify-center rounded-full border-2 border-solid px-6">
      <div className="flex items-center divide-x border-gray-300">
        <button className="h-14 pr-8">
          <span className="">Any location</span>
        </button>
        <button className="h-14 px-8">
          <span className="">Any date</span>
        </button>
        <button className="h-14 px-8">
          <span className="">Any people</span>
        </button>
      </div>

      <button className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-sky-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>
    </div>
  );
};

export default Search;
