import { FaRegStar, FaStar } from "react-icons/fa6";

export function AdminRooCard() {
  const rating = 3;

  const ratingStart = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStart.push(<FaStar key={i} className="text-primary" />);
    } else {
      ratingStart.push(<FaRegStar key={i} className="text-primary" />);
    }
  }

  return (
    <div className="border rounded-medium border-borderLight bg-linear-150 from-compAdmin to-primary shadow-xl flex flex-col overflow-hidden">
      <div className="p-5 flex flex-col gap-5 items-center justify-center h-full">
        <div className="flex items-center justify-between">
          <h3 className="font-bold  text-white">
            Tipy a triky na lepší prodeje
          </h3>
        </div>
        <p className="text-white text-center font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nihil quod ad culpa eum saepe tenetur. Aperiam enim nobis dolore ipsa
          animi repellendus incidunt odio, doloribus, repudiandae reiciendis,
          minima explicabo.
        </p>

        <button className=" font-semibold p-3 px-5 animate hover:scale-110 cursor-pointer rounded-sm shadow-md bg-white">
          Přejít na článek
        </button>
      </div>
    </div>
  );
}

export function AdminRooCardTwo() {
  const rating = 3;

  const ratingStart = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStart.push(<FaStar key={i} className="text-primary" />);
    } else {
      ratingStart.push(<FaRegStar key={i} className="text-primary" />);
    }
  }

  return (
    <div className="col-span-2 border rounded-medium border-borderLight bg-white shadow-xl flex flex-col  overflow-hidden">
      <div className="p-5 flex flex-col gap-5 items-start justify-center text-start w-full h-full">
        <h3 className="font-bold">Tipy a triky na lepší prodeje</h3>
        <p className="font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nihil quod ad culpa eum saepe tenetur. Aperiam enim nobis dolore ipsa
          animi repellendus incidunt odio, doloribus, repudiandae reiciendis,
          minima explicabo.
        </p>

        <button className=" font-semibold p-3 px-5 animate hover:scale-110 cursor-pointer rounded-sm shadow-md bg-white">
          Přejít na článek
        </button>
      </div>
    </div>
  );
}
