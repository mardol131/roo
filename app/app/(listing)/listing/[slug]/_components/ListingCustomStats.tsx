import { ListingSectionWrapper } from "./ListingSectionWrapper";

export type CustomStatProp = {
  stat: string;
  description: string;
};

export function CustomStat(props: CustomStatProp) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="font-bold text-primary text-6xl">{props.stat}</p>
      <p className="text-lg font-semibold text-textNormal">
        {props.description}
      </p>
    </div>
  );
}

export function ListingCustomStats() {
  return (
    <ListingSectionWrapper>
      <div className="grid grid-cols-3">
        <CustomStat stat="1300+" description="odehraných akcí" />
        <CustomStat stat="259" description="akcí světového formátu" />
        <CustomStat stat="70+" description="publikovaných mixů" />
      </div>
    </ListingSectionWrapper>
  );
}
