export type Region = {
  id: string;
  name: string;
  slug: string;
  code: number;
  countryPart?: string;
  countryPartCode?: number;
};

export type Country = {
  id: string;
  name: string;
  slug: string;
  code: number;
};

export type District = {
  id: string;
  name: string;
  slug: string;
  code: number;
  region?: string;
  regionCode?: number;
};

export type Municipality = {
  id: string;
  name: string;
  slug: string;
  code: number;
  statusCode?: string;
  pouCode?: number;
  pouName?: string;
  orpCode?: number;
  orpName?: string;
  region?: string;
  regionCode?: number;
};
