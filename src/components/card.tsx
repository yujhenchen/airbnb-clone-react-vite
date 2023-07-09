interface ImageData {
  label: string;
  alt: string;
  src: string;
}

const imgList: ImageData[] = [
  {
    label: "Image 1 label",
    alt: "Image 1 alt",
    src: "/assets/room.jpg",
  },
];

const renderSlides = imgList.map((img) => {
  return (
    <div key={img.alt} className="h-64 w-full">
      <img className="object-cover w-full h-full" src={img.src} alt={img.alt} />
    </div>
  );
});

const dots = [1, 2, 3, 4, 5].map((index) => {
  return (
    <span
      key={index}
      className="h-2 w-2 cursor-pointer rounded-full bg-slate-400"
    ></span>
  );
});

const CardImageCarousel: React.FC = () => {
  return (
    <div className="container relative">
      <div className="container relative">
        {renderSlides}
        <a className="absolute left-4 top-2/4 cursor-pointer text-white">
          &#10094;
        </a>
        <a className="absolute right-4 top-2/4 cursor-pointer text-white">
          &#10095;
        </a>
      </div>

      <div className="absolute bottom-2 left-2/4 -translate-x-2/4">
        <div className="grid grid-cols-5 gap-x-1">{dots}</div>
      </div>
    </div>
  );
};

const Card: React.FC = () => {
  return (
    <div className="flex flex-col">
      <CardImageCarousel />
      <div className="grid grid-cols-2 pt-2">
        <span className="font-semibold">Helsinki, Finland</span>
        <div className="flex items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
          >
            {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <span>4.9</span>
        </div>
        <span className="col-span-2 text-sm">1,234 kilometers away</span>
        <span className="col-span-2 text-sm">Dec 25 - Dec 25</span>
        <div className="col-span-2 flex text-sm">
          <span className="pr-1 font-semibold">$1000</span>
          <span className="pr-2 font-semibold">TWD</span>
          <span>night</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
