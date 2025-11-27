import { Category } from "@/app/_redux/slices/newListingSlice/newListingSlice";

export const countryOptions: Category[] = [
  { id: "1", label: "Česká republika", slug: "cz" },
  { id: "2", label: "Slovenská republika", slug: "sk" },
];

export const regionOptions: Category[] = [
  { id: "1", label: "Hlavní město Praha", slug: "praha" },
  { id: "2", label: "Středočeský kraj", slug: "stredocesky" },
  { id: "3", label: "Jihočeský kraj", slug: "jihocesky" },
  { id: "4", label: "Plzeňský kraj", slug: "plzensky" },
  { id: "5", label: "Karlovarský kraj", slug: "karlovarsky" },
  { id: "6", label: "Ústecký kraj", slug: "ustecky" },
  { id: "7", label: "Liberecký kraj", slug: "liberecky" },
  { id: "8", label: "Královéhradecký kraj", slug: "kralovehradecky" },
  { id: "9", label: "Pardubický kraj", slug: "pardubicky" },
  { id: "10", label: "Vysočina", slug: "vysocina" },
  { id: "11", label: "Jihomoravský kraj", slug: "jihomoravsky" },
  { id: "12", label: "Olomoucký kraj", slug: "olomoucky" },
  { id: "13", label: "Zlínský kraj", slug: "zlinsky" },
  { id: "14", label: "Moravskoslezský kraj", slug: "moravskoslezsky" },
];

export const districtOptions: Category[] = [
  // Praha
  { id: "1", label: "Praha", slug: "praha" },
  // Středočeský kraj
  { id: "2", label: "Benešov", slug: "benesov" },
  { id: "3", label: "Beroun", slug: "beroun" },
  { id: "4", label: "Kladno", slug: "kladno" },
  { id: "5", label: "Kolín", slug: "kolin" },
  { id: "6", label: "Kutná Hora", slug: "kutna-hora" },
  { id: "7", label: "Mělník", slug: "melnik" },
  { id: "8", label: "Mladá Boleslav", slug: "mlada-boleslav" },
  { id: "9", label: "Nymburk", slug: "nymburk" },
  { id: "10", label: "Praha-východ", slug: "praha-vychod" },
  { id: "11", label: "Praha-západ", slug: "praha-zapad" },
  { id: "12", label: "Příbram", slug: "pribram" },
  { id: "13", label: "Rakovník", slug: "rakovnik" },
  // Jihočeský kraj
  { id: "14", label: "České Budějovice", slug: "ceske-budejovice" },
  { id: "15", label: "Český Krumlov", slug: "cesky-krumlov" },
  { id: "16", label: "Jindřichův Hradec", slug: "jindrichuv-hradec" },
  { id: "17", label: "Písek", slug: "pisek" },
  { id: "18", label: "Prachatice", slug: "prachatice" },
  { id: "19", label: "Strakonice", slug: "strakonice" },
  { id: "20", label: "Tábor", slug: "tabor" },
  // Plzeňský kraj
  { id: "21", label: "Domažlice", slug: "domazlice" },
  { id: "22", label: "Klatovy", slug: "klatovy" },
  { id: "23", label: "Plzeň-město", slug: "plzen-mesto" },
  { id: "24", label: "Plzeň-jih", slug: "plzen-jih" },
  { id: "25", label: "Plzeň-sever", slug: "plzen-sever" },
  { id: "26", label: "Rokycany", slug: "rokycany" },
  { id: "27", label: "Tachov", slug: "tachov" },
  // Karlovarský kraj
  { id: "28", label: "Cheb", slug: "cheb" },
  { id: "29", label: "Karlovy Vary", slug: "karlovy-vary" },
  { id: "30", label: "Sokolov", slug: "sokolov" },
  // Ústecký kraj
  { id: "31", label: "Děčín", slug: "decin" },
  { id: "32", label: "Chomutov", slug: "chomutov" },
  { id: "33", label: "Litoměřice", slug: "litomerice" },
  { id: "34", label: "Louny", slug: "louny" },
  { id: "35", label: "Most", slug: "most" },
  { id: "36", label: "Teplice", slug: "teplice" },
  { id: "37", label: "Ústí nad Labem", slug: "usti-nad-labem" },
  // Liberecký kraj
  { id: "38", label: "Česká Lípa", slug: "ceska-lipa" },
  { id: "39", label: "Jablonec nad Nisou", slug: "jablonec-nad-nisou" },
  { id: "40", label: "Liberec", slug: "liberec" },
  { id: "41", label: "Semily", slug: "semily" },
  // Královéhradecký kraj
  { id: "42", label: "Hradec Králové", slug: "hradec-kralove" },
  { id: "43", label: "Jičín", slug: "jicin" },
  { id: "44", label: "Náchod", slug: "nachod" },
  { id: "45", label: "Rychnov nad Kněžnou", slug: "rychnov-nad-kneznou" },
  { id: "46", label: "Trutnov", slug: "trutnov" },
  // Pardubický kraj
  { id: "47", label: "Chrudim", slug: "chrudim" },
  { id: "48", label: "Pardubice", slug: "pardubice" },
  { id: "49", label: "Svitavy", slug: "svitavy" },
  { id: "50", label: "Ústí nad Orlicí", slug: "usti-nad-orlici" },
  // Vysočina
  { id: "51", label: "Havlíčkův Brod", slug: "havlickuv-brod" },
  { id: "52", label: "Jihlava", slug: "jihlava" },
  { id: "53", label: "Pelhřimov", slug: "pelhrimov" },
  { id: "54", label: "Třebíč", slug: "trebic" },
  { id: "55", label: "Žďár nad Sázavou", slug: "zdar-nad-sazavou" },
  // Jihomoravský kraj
  { id: "56", label: "Blansko", slug: "blansko" },
  { id: "57", label: "Brno-město", slug: "brno-mesto" },
  { id: "58", label: "Brno-venkov", slug: "brno-venkov" },
  { id: "59", label: "Břeclav", slug: "breclav" },
  { id: "60", label: "Hodonín", slug: "hodonin" },
  { id: "61", label: "Vyškov", slug: "vyskov" },
  { id: "62", label: "Znojmo", slug: "znojmo" },
  // Olomoucký kraj
  { id: "63", label: "Jeseník", slug: "jesenik" },
  { id: "64", label: "Olomouc", slug: "olomouc" },
  { id: "65", label: "Prostějov", slug: "prostejov" },
  { id: "66", label: "Přerov", slug: "prerov" },
  { id: "67", label: "Šumperk", slug: "sumperk" },
  // Zlínský kraj
  { id: "68", label: "Kroměříž", slug: "kromeriz" },
  { id: "69", label: "Uherské Hradiště", slug: "uherske-hradiste" },
  { id: "70", label: "Vsetín", slug: "vsetin" },
  { id: "71", label: "Zlín", slug: "zlin" },
  // Moravskoslezský kraj
  { id: "72", label: "Bruntál", slug: "bruntal" },
  { id: "73", label: "Frýdek-Místek", slug: "frydek-mistek" },
  { id: "74", label: "Karviná", slug: "karvina" },
  { id: "75", label: "Nový Jičín", slug: "novy-jicin" },
  { id: "76", label: "Opava", slug: "opava" },
  { id: "77", label: "Ostrava-město", slug: "ostrava-mesto" },
];

// Základní města pro každý okres - expandovatelné podle potřeby
export const cityOptions: Category[] = [
  // Praha
  { id: "1", label: "Praha 1", slug: "praha-1" },
  { id: "2", label: "Praha 2", slug: "praha-2" },
  { id: "3", label: "Praha 3", slug: "praha-3" },
  { id: "4", label: "Praha 4", slug: "praha-4" },
  { id: "5", label: "Praha 5", slug: "praha-5" },
  { id: "6", label: "Praha 6", slug: "praha-6" },
  { id: "7", label: "Praha 7", slug: "praha-7" },
  { id: "8", label: "Praha 8", slug: "praha-8" },
  { id: "9", label: "Praha 9", slug: "praha-9" },
  { id: "10", label: "Praha 10", slug: "praha-10" },

  // Středočeský - vybraná města
  { id: "11", label: "Benešov", slug: "benesov-mesto" },
  { id: "12", label: "Beroun", slug: "beroun-mesto" },
  { id: "13", label: "Kladno", slug: "kladno-mesto" },
  { id: "14", label: "Kolín", slug: "kolin-mesto" },
  { id: "15", label: "Kutná Hora", slug: "kutna-hora-mesto" },
  { id: "16", label: "Mladá Boleslav", slug: "mlada-boleslav-mesto" },
  { id: "17", label: "Příbram", slug: "pribram-mesto" },
  { id: "18", label: "Rakovník", slug: "rakovnik-mesto" },

  // Jihočeský
  { id: "19", label: "České Budějovice", slug: "ceske-budejovice-mesto" },
  { id: "20", label: "Český Krumlov", slug: "cesky-krumlov-mesto" },
  { id: "21", label: "Jindřichův Hradec", slug: "jindrichuv-hradec-mesto" },
  { id: "22", label: "Písek", slug: "pisek-mesto" },
  { id: "23", label: "Tábor", slug: "tabor-mesto" },

  // Plzeňský
  { id: "24", label: "Plzeň", slug: "plzen-mesto" },
  { id: "25", label: "Domažlice", slug: "domazlice-mesto" },
  { id: "26", label: "Klatovy", slug: "klatovy-mesto" },

  // Karlovarský
  { id: "27", label: "Karlovy Vary", slug: "karlovy-vary-mesto" },
  { id: "28", label: "Cheb", slug: "cheb-mesto" },
  { id: "29", label: "Sokolov", slug: "sokolov-mesto" },

  // Ústecký
  { id: "30", label: "Ústí nad Labem", slug: "usti-nad-labem-mesto" },
  { id: "31", label: "Děčín", slug: "decin-mesto" },
  { id: "32", label: "Teplice", slug: "teplice-mesto" },
  { id: "33", label: "Chomutov", slug: "chomutov-mesto" },
  { id: "34", label: "Most", slug: "most-mesto" },

  // Liberecký
  { id: "35", label: "Liberec", slug: "liberec-mesto" },
  { id: "36", label: "Jablonec nad Nisou", slug: "jablonec-nad-nisou-mesto" },
  { id: "37", label: "Česká Lípa", slug: "ceska-lipa-mesto" },

  // Královéhradecký
  { id: "38", label: "Hradec Králové", slug: "hradec-kralove-mesto" },
  { id: "39", label: "Trutnov", slug: "trutnov-mesto" },
  { id: "40", label: "Náchod", slug: "nachod-mesto" },

  // Pardubický
  { id: "41", label: "Pardubice", slug: "pardubice-mesto" },
  { id: "42", label: "Chrudim", slug: "chrudim-mesto" },
  { id: "43", label: "Svitavy", slug: "svitavy-mesto" },

  // Vysočina
  { id: "44", label: "Jihlava", slug: "jihlava-mesto" },
  { id: "45", label: "Havlíčkův Brod", slug: "havlickuv-brod-mesto" },
  { id: "46", label: "Třebíč", slug: "trebic-mesto" },
  { id: "47", label: "Žďár nad Sázavou", slug: "zdar-nad-sazavou-mesto" },

  // Jihomoravský
  { id: "48", label: "Brno", slug: "brno-mesto" },
  { id: "49", label: "Blansko", slug: "blansko-mesto" },
  { id: "50", label: "Břeclav", slug: "breclav-mesto" },
  { id: "51", label: "Hodonín", slug: "hodonin-mesto" },
  { id: "52", label: "Znojmo", slug: "znojmo-mesto" },

  // Olomoucký
  { id: "53", label: "Olomouc", slug: "olomouc-mesto" },
  { id: "54", label: "Přerov", slug: "prerov-mesto" },
  { id: "55", label: "Prostějov", slug: "prostejov-mesto" },
  { id: "56", label: "Šumperk", slug: "sumperk-mesto" },

  // Zlínský
  { id: "57", label: "Zlín", slug: "zlin-mesto" },
  { id: "58", label: "Vsetín", slug: "vsetin-mesto" },
  { id: "59", label: "Kroměříž", slug: "kromeriz-mesto" },
  { id: "60", label: "Uherské Hradiště", slug: "uherske-hradiste-mesto" },

  // Moravskoslezský
  { id: "61", label: "Ostrava", slug: "ostrava-mesto" },
  { id: "62", label: "Opava", slug: "opava-mesto" },
  { id: "63", label: "Karviná", slug: "karvina-mesto" },
  { id: "64", label: "Frýdek-Místek", slug: "frydek-mistek-mesto" },
  { id: "65", label: "Havířov", slug: "havirov-mesto" },
];
