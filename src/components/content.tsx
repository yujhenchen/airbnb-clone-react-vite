import ToggleSwitch from "./global/toggleSwitch/toggleSwitch";
import Card from "./card";

export default function Content() {
  const cardCount = 12;
  const cardIndex = Array.from(Array(cardCount).keys()).map((x) => x + 1);

  const cards = cardIndex.map((index) => {
    return (
      <div key={index}>
        <Card />
      </div>
    );
  });

  return (
    <section className="flex flex-col items-center px-10 pt-4 w-full">
      <div className="px-4 border-box flex place-content-between items-center md:w-1/2 2xl:w-1/3 h-16 w-screen rounded-xl border-2 border-solid border-gray-300 bg-white">
        <div className="flex space-x-2 ">
          <span className="text-center font-semibold">Display total price</span>
          <span className="text-center">Includes all fees, before taxes</span>
        </div>
        <ToggleSwitch />
      </div>
      <div className="pt-8 grid pb-16 grid-cols-1 py-2 gap-4 md:grid-cols-2 md:space-x-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {cards}
      </div>
    </section>
  );
}
