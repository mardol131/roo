import Button from "./_components/atoms/button/Button";
import Text from "./_components/atoms/text/Text";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="h-150 w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-10">
        <Text
          tag="h2"
          size="headingLg"
          text="Stránku se nepodařilo nalézt"
          color="black"
        />
        <Button
          type="button"
          link="/"
          text="Přejít na hlavní stránku"
          size="2xl"
          bgColor="primaryTertiary"
          rounding="full"
          textColor="white"
        />
      </div>
    </div>
  );
}
