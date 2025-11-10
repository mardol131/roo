import SectionHeading from "@/app/_components/atoms/SectionHeading";
import ListingCard from "@/app/_components/cards/ListingCard";

type Props = {};

export default async function CategorySection(props: Props) {
  //   const data = await getPublicCollectionData("listings");

  const cards = [];
  for (let i = 0; i < 5; i++) {
    cards.push(<ListingCard key={i} />);
  }

  return (
    <div className="flex flex-col gap-11">
      <SectionHeading level="h2" text="Místo pro akci" />
      <div className="flex gap-5">
        {cards.map((card) => {
          return card;
        })}
      </div>
    </div>
  );
}
