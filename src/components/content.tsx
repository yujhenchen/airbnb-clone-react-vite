import ToggleSwitch from "./global/toggleSwitch/toggleSwitch";
import Card from "./card";

const Content: React.FC = () => {
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
    <section className="px-10 pt-4">
      <div className="flex justify-center gap-x-2">
        <div className="border-box grid h-16 w-screen grid-cols-6 items-center justify-items-center rounded-xl border-2 border-solid border-gray-300 bg-white md:w-screen lg:w-screen xl:w-2/4 2xl:w-1/3">
          <p className="col-span-2 text-center">Display total price</p>
          <p className="col-span-3 text-center">
            Includes all fees, before taxes
          </p>
          <ToggleSwitch />
        </div>
      </div>
      <div className="pt-8 grid pb-16 grid-cols-1 py-2 gap-4 md:grid-cols-2 md:space-x-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {cards}
      </div>
    </section>
  );
};

export default Content;
