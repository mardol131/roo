import Anniversary from "./Anniversary";
import BabyShower from "./BabyShower";
import Ball from "./Ball";
import Birthday from "./Birthday";
import CompanyParty from "./CompanyParty";
import Engagement from "./Engagement";
import KidParty from "./KidParty";
import OpeningParty from "./OpeningParty";
import Party from "./Party";
import TeamBuilding from "./TeamBuilding";
import Wedding from "./Wedding";

export const iconsList = {
  Anniversary,
  BabyShower,
  Ball,
  Birthday,
  CompanyParty,
  Engagement,
  KidParty,
  OpeningParty,
  Party,
  TeamBuilding,
  Wedding,
};

export const iconsListString = {
  Anniversary: "Anniversary",
  BabyShower: "BabyShower",
  Ball: "Ball",
  Birthday: "Birthday",
  CompanyParty: "CompanyParty",
  Engagement: "Engagement",
  KidParty: "KidParty",
  OpeningParty: "OpeningParty",
  Party: "Party",
  TeamBuilding: "TeamBuilding",
  Wedding: "Wedding",
};

export type IconsList = keyof typeof iconsList;
