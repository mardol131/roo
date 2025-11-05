import SectionWrapper from "@/app/_components/wrappers/SectionWrapper";
import { ReactNode } from "react";

import { FAQCard } from "@/app/_components/molecules/FAQCard";
import image from "@/app/_images/test.jpg";
import { ListingLongDescription } from "@/app/(listing)/listing/[slug]/_components/ListingLongDescription";
import { PhotoGrid } from "@/app/(listing)/listing/[slug]/_components/PhotoGrid";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaChevronRight,
  FaCrown,
  FaHeart,
  FaRegCalendar,
  FaRegStar,
  FaShare,
} from "react-icons/fa6";
import { GiForkKnifeSpoon, GiFruitTree } from "react-icons/gi";
import { HiUser, HiUsers } from "react-icons/hi2";
import { RiSoundModuleFill } from "react-icons/ri";
import { ListingHeader } from "./_components/ListingHeader";
import { ListingSidebar } from "./_components/ListingSidebar";
import { ListingDescription } from "./_components/ListingDescription";
import { SublistingsCards } from "./_components/SublistingCards";
import { ListingFaq } from "./_components/ListingFaq";
import { SidesType } from "shared/src/design/orientation";
import { ImagesGridVertical } from "./_components/ImagesGridVertical";
import { ImagesGridHorizontal } from "./_components/ImagesGridHorizontal";
import { ListingsReviews } from "./_components/ListingReviews";
import { ImagesGridSquare } from "./_components/ImagesGridSquare";
import { ListingCustomStats } from "./_components/ListingCustomStats";
import { ListingSpecifications } from "./_components/ListingSpecifications";
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
