import { FAQCard } from "@/app/_components/molecules/FAQCard";
import { ListingSectionWrapper } from "./ListingSectionWrapper";

export function ListingFaq() {
  return (
    <ListingSectionWrapper heading="Časté dotazy">
      <div className="flex flex-col gap-4">
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />{" "}
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />{" "}
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />{" "}
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />
      </div>
    </ListingSectionWrapper>
  );
}
