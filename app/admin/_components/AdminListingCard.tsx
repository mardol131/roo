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
    <div className="grid text-[13px] bg-white rounded-full grid-cols-8 gap-2 p-2 border border-borderLight items-center justify-items-start">
      <div className="flex gap-5 col-span-2 items-center">
        <div className="w-4 h-4 bg-gray-100 rounded-small border border-borderLight"></div>
        <Image
          src={image}
          height={400}
          width={500}
          alt="image"
          className=" object-cover h-12 w-12 rounded-full border-2 border-gray-300 shadow-md"
        />
        <div className="grid grid-cols-2 items-center gap-2">
          <Link
            href={"/admin/inzeaty"}
            target="_blank"
            className=" cursor-pointer animate hover:bg-primary hover:text-white font-semibold p-2 rounded-full border shadow-sm border-borderLight"
          >
            <FiExternalLink />
          </Link>
          <button className=" cursor-pointer animate hover:bg-primary hover:text-white font-semibold p-2  rounded-full border shadow-sm border-borderLight">
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

      <AdminListingCardData data={"12.5.2025"} />
      <p className="bg-emerald-500 font-semibold flex items-center justify-center pt-[2px] rounded-full shadow-md  px-2 text-white">
        Aktivní
      </p>
      <AdminListingCardData data={"365"} />
      <AdminListingCardData data={"12"} />
      <AdminListingCardData data={"456"} price={"Kč"} />
      <AdminListingCardData data={"365"} />
    </div>
  );
}

export function AdminListingCardSmall() {
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
    <div className="grid text-[13px] bg-white shadow-md rounded-full grid-cols-[4fr_1fr] gap-2 p-2 border border-borderLight items-center justify-items-start">
      <div className="flex gap-5 items-center">
        <Image
          src={image}
          height={400}
          width={500}
          alt="image"
          className=" object-cover h-12 max-w-12 rounded-full border-2 border-gray-300 shadow-md"
        />
        <div className="grid grid-cols-2 items-center gap-2">
          <Link
            href={"/admin/inzeaty"}
            target="_blank"
            className=" cursor-pointer animate hover:bg-primary hover:text-white font-semibold p-2 rounded-full border shadow-sm border-borderLight"
          >
            <FiExternalLink />
          </Link>
          <button className=" cursor-pointer animate hover:bg-primary hover:text-white font-semibold p-2  rounded-full border shadow-sm border-borderLight">
            <RiSettings3Line />
          </button>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold text-sm text-primary">Mlýn Davídkov</p>
          <div className="flex items-center justify-self-end">
            {ratingStart}
          </div>
        </div>
      </div>

      <p className="bg-emerald-500 font-semibold flex items-center justify-center pt-[2px] rounded-full shadow-md  px-2 text-white">
        Aktivní
      </p>
    </div>
  );
}

function AdminListingCardData({
  data,
  price,
}: {
  data: string | number;
  price?: "Kč";
}) {
  return (
    <p className="font-semibold">
      {data} {price && <span className="font-medium">{price}</span>}
    </p>
  );
}
function Divider() {
  return <div className="w-[2px] bg-borderLight/30 h-7"></div>;
}
