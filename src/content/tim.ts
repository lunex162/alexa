// Doslovne z podkladov kliniky (Náš tím_Pinium.odt).
// Na potvrdenie: „Ing. Tataiana Kaliská“ – v podkladoch takto, pravdepodobne preklep (Tatiana).

export type Person = { name: string; role: string };

export const lekari: Person[] = [
  { name: "MUDr. Roman Jantoš", role: "lekár, ambulancia všeobecného lekára" },
  { name: "MUDr. Yana Dobosh", role: "lekár, ambulancia všeobecného lekára" },
  { name: "MUDr. Stanislav Ďurík", role: "primár, ambulancia ORL" },
  { name: "MUDr. Veronika Školková", role: "lekár, ambulancia ORL" },
  {
    name: "MUDr. Bibiana Kohútová Hartmannová",
    role: "lekár, ambulancia ORL, ambulancia estetickej a preventívnej medicíny",
  },
  { name: "MUDr. Dáša Klobušiaková", role: "lekár, ambulancia SONO/USG" },
  { name: "MUDr. Stanislav Křivánek, PhD.", role: "lekár, ortopedická ambulancia" },
  { name: "MUDr. Lukáš Uhliarik", role: "lekár, chirurgická a proktologická ambulancia" },
];

export const sestry: Person[] = [
  { name: "Bc. Zuzana Fričová", role: "zdravotná sestra" },
  { name: "Renáta Kanderová Žišková", role: "zdravotná sestra" },
  { name: "Andrea Hartmann", role: "zdravotná sestra" },
  { name: "Mgr. Katarína Španková", role: "zdravotná sestra" },
  { name: "Mgr. Paulína Župová", role: "anestéziologická sestra" },
];

export const administrativa: Person[] = [
  { name: "Ing. Tataiana Kaliská", role: "project manager" },
  { name: "Kristína Floriánová", role: "marketing" },
  { name: "Ing. Veronika Homolová", role: "recepcia" },
  { name: "Mgr. Martina Kadurová", role: "recepcia" },
];
