export type AdventureTab = '괴수' | '물품' | '임무' | '탐방' | '보상';

export type Achievement = {
  title: string;
  mission: Mission[];
};

export type Mission = {
  name: string;
  score: number;
  condition: string;
};

export type BodyRecipe = {
  강화비약: number;
  전표: number;
  누적비약: number;
  누적전표: number;
};
