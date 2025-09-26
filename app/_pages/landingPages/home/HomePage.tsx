type Props = {};

import Link from "next/link";
import React, { ReactNode } from "react";
import image from "@/app/_images/heroOne.jpg";
import Image from "next/image";
import logo from "@/public/logo.png";
import Button from "@/app/_global/atoms/Button";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";

type SectionWrapperProps = {
  classNameOuter?: string;
  classNameInner?: string;
  children: ReactNode;
  image?: string;
};

export function WebsiteHeader() {
  return (
    <div className="hidden z-50 w-full fixed md:flex justify-center p-4">
      <div className="bg-white max-w-contentWrapper w-full flex justify-between items-center rounded-full px-10 shadow-lg">
        <Link href={"/home"}>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="w-19"
          />
        </Link>
        <div className="flex items-center justify-center gap-10 text-lg font-semibold">
          <Link href={"#Roo"} className="hover:text-primary animate">
            Co je ROO?
          </Link>
          <Link href={"#Roo"} className="hover:text-primary animate">
            Blog
          </Link>
          <Link href={"#Roo"} className="hover:text-primary animate">
            O nás
          </Link>
          <Link href={"#Roo"} className="hover:text-primary animate">
            Kontakt
          </Link>
        </div>
        <Link href={"#pain"}>
          <Button
            text="Přidej se k rodině"
            size="lg"
            color="gradientThree"
            rounding="full"
          />
        </Link>
      </div>
    </div>
  );
}

export function WebsiteHeaderMobile() {
  return (
    <div className="z-50 md:hidden w-full fixed flex justify-center p-4">
      <div className="bg-white w-full flex justify-between items-center rounded-full px-7 shadow-lg">
        <Link href={"/home"}>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="w-14"
          />
        </Link>
        <div className="hidden flex items-center justify-center gap-10 text-lg font-semibold">
          <Link href={"#Roo"} className="hover:text-primary animate">
            Co je ROO?
          </Link>
          <Link href={"#Roo"} className="hover:text-primary animate">
            Blog
          </Link>
          <Link href={"#Roo"} className="hover:text-primary animate">
            O nás
          </Link>
          <Link href={"#Roo"} className="hover:text-primary animate">
            Kontakt
          </Link>
          <Link href={"#pain"}>
            <Button
              text="Přidej se k nám"
              size="md"
              color="gradientThree"
              rounding="full"
            />
          </Link>
        </div>

        <TiThMenu className="text-primary text-2xl" />
      </div>
    </div>
  );
}

export function SectionWrapper(props: SectionWrapperProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`${props.classNameOuter} relative z-0 w-full flex items-center justify-center overflow-hidden`}
    >
      <div
        className={`${props.classNameInner} flex items-center justify-center h-full max-w-contentWrapper w-full p-5`}
      >
        {props.children}
      </div>
    </div>
  );
}

type HeroBackgroundImageProps = {
  headingOne: string;
  headingTwo?: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
};

export function HeroBackgroundImage(props: HeroBackgroundImageProps) {
  return (
    <SectionWrapper image={props.image}>
      <div className="md:min-h-200 min-h-140 flex items-center w-full justify-start gap-5">
        <div className="max-w-170 flex flex-col gap-4 bg-white/80 md:p-10 p-5 rounded-large border border-borderLight shadow-lg">
          {" "}
          <h1 className="text-primary font-semibold">
            {props.headingOne}
            {props.headingTwo && (
              <>
                <br />
                {props.headingTwo}
              </>
            )}
          </h1>
          <p className="md:text-2xl text-lg font-semibold">{props.text}</p>
          <Link href={props.buttonUrl}>
            <Button
              text={props.buttonText}
              color="gradientThree"
              size="xl"
              rounding="full"
            />
          </Link>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 md:-mb-20 md:-mr-15 -mb-5 -mr-5 md:w-80 md:h-80 w-30 h-30 shadow-[0px_0px_15px_4px] shadow-black/50 rounded-full bg-linear-60 from-primary to-tertiary"></div>
      <div className="absolute right-0 md:bottom-50 bottom-20 md:-mb-20 md:-mr-15 md:w-40 md:h-40 -mb-10 -mr-10 w-20 h-20 shadow-[0px_0px_15px_4px] shadow-black/50 rounded-full bg-linear-60 from-primary to-secondary"></div>

      <div className="absolute left-0 top-0  md:-mt-30 md:-ml-15 -mt-5 -ml-5 md:w-70 md:h-70 w-30 h-30 rounded-full bg-linear-60 shadow-[0px_0px_15px_4px] shadow-black/50  from-primary to-tertiary"></div>
    </SectionWrapper>
  );
}

export default function HomePage({}: Props) {
  return (
    <>
      {" "}
      <WebsiteHeaderMobile />
      <WebsiteHeader />
      <HeroBackgroundImage
        headingOne="Víc objednávek."
        headingTwo="Míň dohadování."
        text="ROO je nová platforma, kde tě najdou lidé, co plánují akce – svatby, firemky, oslavy. Vytvoříš si profil, zadáš konkrétní nabídky a můžeš začít přijímat poptávky."
        buttonText="Přidej se na waitlist"
        buttonUrl="#hello"
        image={image.src}
      />
      <div className="h-screen"></div>
    </>
  );
}
