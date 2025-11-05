import { FaRegStar } from "react-icons/fa6";
import { ListingSectionWrapper } from "./ListingSectionWrapper";

export function ListingsReviews() {
  const items = [];
  for (let i = 0; i < 3; i++) {
    items.push(<ReviewCard key={i} />);
  }
  return (
    <ListingSectionWrapper>
      <div className="flex gap-3">{items}</div>
    </ListingSectionWrapper>
  );
}

export type ReviewCardType = {};

export function ReviewCard(props: ReviewCardType) {
  return (
    <div className="flex flex-col items-center border border-borderLight rounded-medium shadow-md">
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <p className="text-sm font-semibold text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ducimus
          modi totam aperiam velit magnam laborum numquam, alias, nihil nulla id
          enim, ipsum aliquam consequatur voluptatem voluptas maiores reiciendis
          neque.
        </p>
        <div className="text-center">
          <p className="font-semibold">Babrbora Nesvařilová</p>
          <p className="text-sm">CEO Best Comp a.s.</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-3xl text-primary min-h-30">
        <FaRegStar />
        <p>5.0</p>
      </div>
    </div>
  );
}
