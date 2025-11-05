import image from "@/app/_images/test.jpg";
import EmailCta from "../_components/cta/EmailCta";
import SectionWrapper from "../_components/wrappers/SectionWrapper";
import CategorySection from "./_components/CategorySection";
import BubblesSection from "./_components/BubblesSection";

type Props = {};

export default function MainPage({}: Props) {
  const bubblesArray = [];

  for (let i = 0; i < 6; i++) {
    bubblesArray.push({
      image: { src: image.src },
      text: "Praha",
      link: "/hello",
    });
  }
  return (
    <>
      <div className="w-full pt-10 flex justify-center">
        <div>
          <SectionWrapper>
            <div className=" pb-20 flex flex-col gap-16 max-w-contentWrapper w-full">
              <CategorySection />
              <CategorySection />
              <BubblesSection bubbles={bubblesArray} />
              <CategorySection />
              <CategorySection />
              <EmailCta
                heading="Buď v obraze!"
                text="  Lorem ipsum dolor sit amet consectetur adipisicing elit."
                buttonText="Odebírat novinky"
                webhookUrl="dsa898"
                button={{ text: "Odebírat" }}
              />
              <CategorySection />
              <CategorySection />
            </div>
          </SectionWrapper>{" "}
        </div>
      </div>
    </>
  );
}
