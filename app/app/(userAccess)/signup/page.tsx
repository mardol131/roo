import Text from "@/app/_components/atoms/text/Text";
import image from "@/app/_images/place.jpg";
import Image from "next/image";
import SignupForm from "./_components/SignupForm";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-2 min-h-full">
      <div className="max-w-contentWrapper flex flex-col w-full justify-center items-center h-full">
        <SignupForm />
      </div>
      <div className="border-l border-borderLight relative p-10 grid grid-cols-2 items-start">
        <div className="relative z-10 w-full  m-10 flex flex-col gap-5 p-10 top-0 bg-black/50 rounded-xl backdrop-blur-xs">
          <Text
            tag="h4"
            size="headingSm"
            text="Zapomněli jste heslo? S tím samozřejmě umíme pomoct!"
            color="white"
            fontWeight="semibold"
          />
          <Text
            tag="p"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea quas dicta libero alias. Numquam doloremque illo tempore alias rerum animi inventore quae voluptatem fugit, sunt veritatis voluptatum deleniti quas!
"
            color="white"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 w-full h-full object-cover rounded-xl -translate-x-1/2 -translate-y-1/2 p-10">
          <Image
            src={image.src}
            height={2000}
            width={2000}
            alt="password reset"
            className="w-full h-full object-cover rounded-xl shadow-xl"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
