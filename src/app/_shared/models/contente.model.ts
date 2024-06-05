export interface Content {
  icon: string;
  header: string;
  short: string;
  affix: Affix[];
}

interface Affix {
  aulas?: string;
  apostila?: string;
  questoes?: string;
}
