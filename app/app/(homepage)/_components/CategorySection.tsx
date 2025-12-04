import Text from "@/app/_components/atoms/text/Text";
import ListingCard from "@/app/_components/atoms/cards/ListingCard";

type Props = {};

export default async function CategorySection(props: Props) {
  //   const data = await getPublicCollectionData("listings");

  const cards = [];
  for (let i = 0; i < 5; i++) {
    cards.push(<ListingCard key={i} />);
  }

  return (
    <div className="flex flex-col gap-11">
      <Text tag="h2" text="Kategorie" size="headingMd" />
      <div className="flex gap-5">
        {cards.map((card) => {
          return card;
        })}
      </div>
    </div>
  );
}
