import SectionWrapper from "@/app/_components/wrappers/SectionWrapper";

import { ListingLongDescription } from "@/app/(listing)/listing/[slug]/_components/ListingLongDescription";
import { PhotoGrid } from "@/app/(listing)/listing/[slug]/_components/PhotoGrid";
import { ImagesGridHorizontal } from "./_components/ImagesGridHorizontal";
import { ImagesGridSquare } from "./_components/ImagesGridSquare";
import { ImagesGridVertical } from "./_components/ImagesGridVertical";
import { ListingCustomStats } from "./_components/ListingCustomStats";
import { ListingDescription } from "./_components/ListingDescription";
import { ListingFaq } from "./_components/ListingFaq";
import { ListingHeader } from "./_components/ListingHeader";
import { ListingsReviews } from "./_components/ListingReviews";
import { ListingSidebar } from "./_components/ListingSidebar";
import { ListingSpecifications } from "./_components/ListingSpecifications";
import { SublistingsCards } from "./_components/SublistingCards";
type Props = {};

export default function page({}: Props) {
  return (
    <div className="pb-10">
      <SectionWrapper>
        <PhotoGrid />
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid grid-cols-[3fr_2fr] w-full gap-9">
          <div className="min-h-screen">
            <ListingHeader />
            <ListingDescription />
            <ImagesGridVertical direction="left" />
            <ListingSpecifications />
            <ListingLongDescription />
            <ListingCustomStats />
            <ImagesGridHorizontal direction="right" />
            <ImagesGridSquare direction="left" />
            <SublistingsCards />
            <ImagesGridVertical direction="right" />
            <ListingFaq />
            <ListingsReviews />
          </div>
          <ListingSidebar />
        </div>
      </SectionWrapper>
    </div>
  );
}
