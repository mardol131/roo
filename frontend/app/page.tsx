import Catalog from "./_components/catalog/Catalog";
import SectionWrapper from "./_components/wrappers/SectionWrapper";
import EventTypesWithIcons from "./_components/navigation/EventTypesWithIcons";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div>
        <SectionWrapper>
          <EventTypesWithIcons />
        </SectionWrapper>
        <SectionWrapper>
          <Catalog />
        </SectionWrapper>
      </div>
    </div>
  );
}
