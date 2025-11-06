import { BubbleType } from "@/app/_types/bubbles";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Bubble from "../../_components/bubbles/Bubble";

type Props = {
  bubbles: BubbleType[];
};

export default function BubblesSection(props: Props) {
  return (
    <div className="flex flex-col gap-15">
      <div className="grid grid-cols-4 gap-5 min-h-140">
        {props.bubbles.map((bubble, index) => {
          let colSpan = 1;
          if (index === 2) {
            colSpan = 2;
          } else if (index === 3) {
            colSpan = 2;
          } else {
            colSpan = 1;
          }

          return (
            <Bubble
              key={bubble.link + index}
              image={{ src: bubble.image.src }}
              text="Praha"
              link="/hello"
              colSpan={colSpan}
            />
          );
        })}
      </div>
      <div className="bg-gray-300/0 rounded-full flex gap-3 p-2 max-w-150 self-center w-full border-2 border-primary shadow-xl">
        <div className="flex items-stretch justify-between w-full gap-6 px-4 font-semibold text-textPlaceholder">
          <input
            type="text"
            placeholder="Typ akce"
            className="self-center outline-0 focus:border-b-2 border-secondary/15"
          />
        </div>
        <button className="shrink-0 w-8 h-8 flex items-center justify-center bg-linear-30 from-secondary via-primary to-tertiary rounded-full text-white text-xl justify-self-end">
          <FaMagnifyingGlass />
        </button>
      </div>
    </div>
  );
}
