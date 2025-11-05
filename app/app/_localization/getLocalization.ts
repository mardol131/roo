import { header } from "./cs/header";

export type LocalizationCountryCodes = "cs";

const cs = {
  ...header,
};

const localizationByCountry = {
  cs,
};

export function getLocalization(
  country: LocalizationCountryCodes,
  prefix: string
) {
  const locals = localizationByCountry[country];
  return function getText(id: string): string {
    const text = Object.prototype.hasOwnProperty.call(locals, `${prefix}.${id}`)
      ? locals[`${prefix}.${id}` as keyof typeof locals]
      : id;

    return text;
  };
}
