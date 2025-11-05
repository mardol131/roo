import { FaCrown, FaHeart, FaShare } from "react-icons/fa6";

export function SupervendorBanner() {
  return (
    <div className="flex flex-col gap-3">
      <div className="border border-borderLight bg-white rounded-medium p-7 shadow-md">
        <p className="text-center text-textNormal font-semibold">
          Tento dodavatel je v kategorii
        </p>
        <div className="flex items-center justify-center gap-4 bg-clip-text bg-linear-60 from-secondary via-primary to-tertiary">
          <FaCrown className="text-6xl text-amber-400" />
          <div className="text-4xl font-semibold text-transparent uppercase ">
            #Supervendor
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="border border-borderLight rounded-medium items-center justify-center flex gap-3 py-3 shadow-md">
          <FaHeart className="text-primary text-2xl" />
          <p>Přidat do oblíbených</p>
        </button>
        <button className="border border-borderLight rounded-medium items-center justify-center flex gap-3 shadow-md">
          <FaShare className="text-primary text-2xl" />
          <p>Sdílet</p>
        </button>
      </div>
    </div>
  );
}
