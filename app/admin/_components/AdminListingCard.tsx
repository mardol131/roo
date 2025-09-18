import Image from "next/image";
import image from "@/app/_images/test.jpg";
import { FaRegStar, FaStar } from "react-icons/fa6";

export function AdminListingCard() {
  const rating = 3;

  const ratingStart = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStart.push(<FaStar key={i} className="text-pink" />);
    } else {
      ratingStart.push(<FaRegStar key={i} className="text-pink" />);
    }
  }

  return (
    <div className="border rounded-medium border-borderLight bg-white shadow-lg overflow-hidden">
      <Image
        src={image}
        height={400}
        width={500}
        alt="image"
        className=" object-cover h-50 w-full"
      />
      <div className="p-3 flex flex-col gap-5 text-sm">
        <div className="grid grid-cols-[3fr_1fr] justify-between">
          <h4 className="font-bold  text-pink">Mlýn Davídkov</h4>
          <div className="flex items-center justify-self-end">
            {ratingStart}
          </div>{" "}
        </div>
        <div className="font-semibold gap-3 flex flex-col text-base">
          <div className="flex justify-between">
            <p className="">Zobrazení</p>
            <p>365</p>
          </div>
          <div className="flex justify-between">
            <p className="">Počet objednávek</p>
            <p>4</p>
          </div>
        </div>
        <button className="border w-full cursor-pointer animate hover:bg-pink hover:text-white font-semibold p-2 rounded-small shadow-md border-borderLight">
          Upravit inzerát
        </button>
      </div>
    </div>
  );
}
