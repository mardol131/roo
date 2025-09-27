import Button from "@/app/_global/atoms/Button";
import Link from "next/link";

export type HeroBackgroundImageProps = {
  headingOne: string;
  headingTwo?: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
};

export function HeroBackgroundImage(props: HeroBackgroundImageProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex min-h-screen overflow-hidden"
    >
      <div className="relative md:w-[50%] w-full flex items-center justify-center md:bg-primary/5 bg-white/70">
        <div className="md:min-h-200 min-h-140 max-w-150 flex flex-col items-center text-center w-full justify-center gap-5 p-5">
          <h1 className="text-primary font-semibold md:text-7xl text-5xl">
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
        <div className="absolute right-0 bottom-0 md:-mb-20 md:-mr-15 -mb-5 -mr-5 md:w-80 md:h-80 w-30 h-30 shadow-[0px_0px_15px_4px] shadow-black/50 rounded-full bg-linear-60 from-primary to-tertiary"></div>
        <div className="absolute right-0 md:bottom-50 bottom-20 md:-mb-20 md:-mr-15 md:w-40 md:h-40 -mb-10 -mr-10 w-20 h-20 shadow-[0px_0px_15px_4px] shadow-black/50 rounded-full bg-linear-60 from-primary to-secondary"></div>

        <div className="absolute left-0 top-0  md:-mt-30 md:-ml-15 -mt-5 -ml-5 md:w-70 md:h-70 w-30 h-30 rounded-full bg-linear-60 shadow-[0px_0px_15px_4px] shadow-black/50  from-primary to-tertiary"></div>
      </div>
    </div>
  );
}
