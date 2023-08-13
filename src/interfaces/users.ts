export type IUser = {
  index: number;
  userId: string;
  password: string;
  email: string;
  grade: number;
  point: number;
  mainCharacter: string;
  openTalk: string;
  createdAt: string;
  updatedAt: string;
};

export type NewUser = {
  userId: string;
  password: string;
  email: string;
};
