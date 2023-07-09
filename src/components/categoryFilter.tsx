import { useState } from "react";
import { type ImgData } from "../modules/global.module";

const CategoryFilter: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const categoryItemData: (ImgData & { count: number })[] = Array.from(
    { length: 30 },
    (_, index) => ({
      count: index + 1,
      src: "/assets/moose.svg",
      alt: `Image ${index + 1}`,
      width: 0,
      height: 0,
    })
  );

  const offsetAmount = 72;
  const slideStart = 0;
  const slideLength = 640;
  const grayButtonColor = "#D3D3D3";
  const defaultButtonColor = "#000000";

  const handleClickPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - offsetAmount);
    }
  };

  const handleClickNext = () => {
    // todo: need to check the current startIndex if > than amount
    setStartIndex(startIndex + offsetAmount);
  };

  return (
    <div className="sticky top-16 z-10 w-full flex h-28 items-center bg-white pt-4 px-2">
      <div className="flex w-full items-center space-x-4">
        <div className="relative w-[calc(100%-96px)] overflow-x-hidden">
          <div
            className={`flex duration-500`}
            style={{
              transform: `translateX(-${startIndex}px)`,
            }} /*use css here due to tailwindcss do not allow construct class names dynamically*/
          >
            {categoryItemData.map((itemData) => {
              return (
                <div
                  key={itemData.count}
                  className="mx-8 flex flex-none flex-col items-center"
                >
                  <div className="relative h-8 w-8">
                    <img
                      src={itemData.src}
                      alt={`${itemData.alt} ${itemData.count}`}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <p className="text-sm text-gray-500">Animals</p>
                </div>
              );
            })}
          </div>
          <button
            className="min-w-0 absolute top-1/2 box-border flex h-8 w-8 -translate-y-1/2 items-center rounded-full border-2 border-solid border-gray-300 bg-white"
            value="previous"
            onClick={handleClickPrevious}
            disabled={startIndex === slideStart ? true : false}
          >
            <svg
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={
                startIndex === slideStart ? grayButtonColor : defaultButtonColor
              }
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="min-w-0 absolute left-full top-1/2 box-border flex h-8 w-8 -translate-x-full -translate-y-1/2 items-center rounded-full border-2 border-solid border-gray-300 bg-white"
            value="next"
            onClick={handleClickNext}
            disabled={startIndex > slideLength ? true : false}
          >
            <svg
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={
                startIndex > slideLength ? grayButtonColor : defaultButtonColor
              }
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <button className="min-w-0 box-border flex h-12 w-24 flex-nowrap items-center space-x-2 rounded-xl border-2 border-solid border-gray-300 bg-white p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
          </svg>
          <span className="text-xs">Filters</span>
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
