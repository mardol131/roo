import Image from "next/image";
import Section from "./_components/catalog/Section";
import Catalog from "./_components/catalog/Catalog";
import SectionWrapper from "./_components/wrappers/SectionWrapper";
import Categories from "./_components/icons/Categories";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div>
        <SectionWrapper>
          <Categories />
        </SectionWrapper>
        <SectionWrapper>
          <Catalog />
        </SectionWrapper>
      </div>
    </div>
  );
}
