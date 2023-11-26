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
