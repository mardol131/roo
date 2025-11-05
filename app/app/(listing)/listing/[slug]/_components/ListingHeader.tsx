import { FaMapMarkerAlt } from "react-icons/fa";
import { GiForkKnifeSpoon, GiFruitTree } from "react-icons/gi";
import { HiUser, HiUsers } from "react-icons/hi2";

export function ListingHeader() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-[5fr_2fr]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-textNormal break-words">
            Catering Mlýn Davídkov
          </h1>
          <div className="flex items-center gap-10">
            <FaMapMarkerAlt className="text-2xl text-primary" />
            <p>Okres Kolín | Praha</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-7">
            <HiUsers className="text-2xl text-primary" />
            <p>
              max. <span className="font-semibold">900</span> osob
            </p>
          </div>
          <div className="flex items-center gap-7">
            <HiUser className="text-2xl text-primary" />
            <p>
              min. <span className="font-semibold">900</span> osob
            </p>
          </div>
          <div className="flex items-center gap-7">
            <GiForkKnifeSpoon className="text-2xl text-primary" />
            <p>
              <span className="font-semibold">17</span> typů kuchyní
            </p>
          </div>
          <div className="flex items-center gap-7">
            <GiFruitTree className="text-2xl text-primary" />
            <p>Vnitřní i venkovní akce</p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-5 text-center gap-2">
        <p className="py-3 px-4 border-2 border-primary font-semibold rounded-medium text-primary">
          Show Kitchen
        </p>
        <p className="py-3 px-4 border-2 border-primary font-semibold rounded-medium text-primary">
          Show Kitchen
        </p>{" "}
        <p className="py-3 px-4 border-2 border-primary font-semibold rounded-medium text-primary">
          Show Kitchen
        </p>{" "}
        <p className="py-3 px-4 border-2 border-primary font-semibold rounded-medium text-primary">
          Show Kitchen
        </p>{" "}
        <p className="py-3 px-4 border-2 border-primary font-semibold rounded-medium text-primary">
          Show Kitchen
        </p>
      </div>
    </div>
  );
}
