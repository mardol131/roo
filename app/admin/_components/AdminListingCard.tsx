import Image from "next/image";
import image from "@/app/_images/test.jpg";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { RiSettings3Line } from "react-icons/ri";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export function AdminListingCard() {
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
    <div className="grid text-sm grid-cols-8 gap-2 p-2 border-b last:border-b-0 border-borderLight items-center justify-items-start">
      <div className="flex gap-5 col-span-2 items-center">
        <div className="w-4 h-4 bg-gray-100 rounded-small border border-borderLight"></div>
        <Image
          src={image}
          height={400}
          width={500}
          alt="image"
          className=" object-cover h-12 w-12 rounded-small"
        />
        <div className="grid grid-cols-2 items-center gap-2">
          <Link
            href={"/admin/inzeaty"}
            target="_blank"
            className="border cursor-pointer animate hover:bg-primary hover:text-white font-semibold p-2 rounded-small shadow-sm border-borderLight"
          >
            <FiExternalLink />
          </Link>
          <button className="border cursor-pointer animate hover:bg-primary hover:text-white font-semibold p-2  rounded-small shadow-sm border-borderLight">
            <RiSettings3Line />
          </button>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold text-base text-primary">Mlýn Davídkov</p>
          <div className="flex items-center justify-self-end">
            {ratingStart}
          </div>
        </div>
      </div>

      <p className="">12.5.2025</p>
      <p className="bg-emerald-500 font-semibold rounded-sm px-2 text-white">
        Aktivní
      </p>
      <p className="">365</p>
      <p className="">12</p>
      <p className="">
        50000 <span>Kč</span>
      </p>
      <p className="">365</p>
    </div>
  );
}

function Divider() {
  return <div className="w-[2px] bg-borderLight/30 h-7"></div>;
}
