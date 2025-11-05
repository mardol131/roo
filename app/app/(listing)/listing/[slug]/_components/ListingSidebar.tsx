import { FaRegCalendar } from "react-icons/fa6";
import { SupervendorBanner } from "./SupervendorBanner";

export function ListingSidebar() {
  const items = [];

  for (let i = 0; i < 4; i++) {
    items.push(
      <div key={i} className="flex flex-col gap-2">
        <p className="font-semibold text-sm">Datum konání akce</p>
        <div className="flex gap-4 items-center border rounded-small border-borderLight p-2">
          <FaRegCalendar className="text-primary text-2xl" />
          <select
            id="pet-select"
            className="outline-borderLight text-sm w-full p-1 font-semibold text-textNormal/60"
          >
            <option value="">Vyberte</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <SupervendorBanner />
      <div className="sticky top-30 flex flex-col gap-4">
        <div className=" flex flex-col gap-5  border p-8 rounded-medium border-borderLight shadow-lg justify-center items-center">
          <div className="grid grid-cols-2 gap-4 w-full">{items}</div>
          <button className="py-2 animate hover:scale-105 cursor-pointer px-5 text-xl bg-linear-60 from-secondary via-primary to-tertiary rounded-full text-white font-semibold">
            Nezávazně poptat
          </button>
          <p className="text-textPlaceholder text-sm">
            Zatím vám nebude nic účtováno
          </p>
          <div className="border-t w-full h-1 border-borderLight"></div>
          <p className="w-full">Orientační cena:</p>
          <p className="text-2xl font-semibold text-primary mb-5">
            od 2.000 Kč za osobu
          </p>
        </div>
      </div>
    </div>
  );
}
