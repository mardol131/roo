import Button from "@/app/_global/atoms/Button";
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
    <div className="border rounded-medium border-borderLight bg-white shadow-xl flex flex-col overflow-hidden">
      <div className="p-5 flex flex-col gap-5 items-start text-start justify-center h-full">
        <h4 className="font-bold ">Tipy a triky na lepší prodeje</h4>

        <p className="font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nihil quod ad culpa eum saepe tenetur. Aperiam enim nobis dolore ipsa
          animi repellendus incidunt odio, doloribus, repudiandae reiciendis,
          minima explicabo.
        </p>

        <Button
          text="Přejít na článek"
          bgColor="primarySecondary"
          size="lg"
          rounding="full"
        />
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
        <h4 className="font-bold">Tipy a triky na lepší prodeje</h4>
        <p className="font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nihil quod ad culpa eum saepe tenetur. Aperiam enim nobis dolore ipsa
          animi repellendus incidunt odio, doloribus, repudiandae reiciendis,
          minima explicabo.
        </p>

        <Button
          text="Přejít na článek"
          bgColor="primarySecondary"
          size="lg"
          rounding="full"
        />
      </div>
    </div>
  );
}
