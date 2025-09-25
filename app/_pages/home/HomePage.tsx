type Props = {};

import Link from "next/link";
import React, { ReactNode } from "react";
import image from "@/app/_images/heroOne.jpg";
import Image from "next/image";
import logo from "@/public/logo.png";
import Button from "@/app/_global/atoms/Button";

type SectionWrapperProps = {
  classNameOuter?: string;
  classNameInner?: string;
  children: ReactNode;
  image?: string;
};

export function WebsiteHeader() {
  return (
    <div className="w-full fixed flex justify-center p-4">
      <div className="bg-white max-w-[80%] w-full flex justify-between items-center rounded-full px-10 shadow-lg">
        <Image
          src={logo}
          width={200}
          height={200}
          alt="logo"
          className="w-19"
        />
        <div className="flex items-center justify-center gap-10 font-semibold">
          <Link href={"#Roo"}>Co je ROO?</Link>
          <Link href={"#Roo"}>Blog</Link>
          <Link href={"#Roo"}>O nás</Link>
          <Link href={"#Roo"}>Kontakt</Link>
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

export function SectionWrapper(props: SectionWrapperProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`${props.classNameOuter} w-full flex items-center justify-center`}
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
      <div className="min-h-170 flex items-center w-full justify-start gap-5">
        <div className="max-w-150 flex flex-col gap-4">
          {" "}
          <h1 className="text-primary">
            {props.headingOne}
            {props.headingTwo && (
              <>
                <br />
                {props.headingTwo}
              </>
            )}
          </h1>
          <p>{props.text}</p>
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
    </SectionWrapper>
  );
}

export default function HomePage({}: Props) {
  return (
    <>
      {" "}
      <WebsiteHeader />
      <HeroBackgroundImage
        headingOne="Víc objednávek."
        headingTwo="Míň dohadování."
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, consequuntur earum exercitationem sunt explicabo et, adipisci modi assumenda repudiandae cupiditate enim perspiciatis magni vel eveniet. Ullam fugit sunt provident pariatur."
        buttonText="Přidej se na waitlist"
        buttonUrl="#hello"
        image={image.src}
      />
      <div className="h-screen"></div>
    </>
  );
}
