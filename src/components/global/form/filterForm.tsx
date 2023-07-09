import { useState } from "react";

const FilterForm = () => {
  const [coolArray, setCoolArray] = useState<string[]>(["Cool + 1"]);

  function addCool() {
    const newThingText = `Cool + ${coolArray.length + 1}`;
    setCoolArray((prevCools) => [...prevCools, newThingText]);
  }

  const cools = coolArray.map((cool) => {
    return <span key={`id-${cool}`}>{cool}</span>;
  });

  return (
    <div className="my-2 grid grid-cols-2 bg-gray-300 p-4">
      <div className="flex p-2">
        <label htmlFor="first">First:</label>
        <input type="text" name="first" placeholder="First text"></input>
      </div>

      <div className="flex p-2">
        <label htmlFor="second">Second:</label>
        <input type="text" name="second" placeholder="Second text"></input>
      </div>

      <div className="col-span-2 flex items-center justify-center bg-gray-400 p-2">
        <button
          className="bg-gray-500 transition-colors hover:bg-sky-300 min-w-0"
          onClick={addCool}
        >
          Generate
        </button>
      </div>

      <div className="col-span-2 flex justify-between">{cools}</div>
    </div>
  );
};

export default FilterForm;
