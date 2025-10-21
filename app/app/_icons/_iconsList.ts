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

// _iconsList.ts
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Typ jen pro skutečné ikonové komponenty
export type LucideIconsType = {
  [K in keyof typeof LucideIcons]: (typeof LucideIcons)[K] extends LucideIcon
    ? K
    : never;
}[keyof typeof LucideIcons];

// Volitelné: můžeš si vygenerovat seznam názvů ikon
export const lucideIconsList = Object.keys(LucideIcons).filter(
  (key) => typeof (LucideIcons as any)[key] === "function"
) as LucideIconsType[];

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

export type IconsList = keyof typeof iconsList;
