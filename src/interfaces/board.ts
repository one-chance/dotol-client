export type Category = 'free' | 'tip' | 'video' | 'server' | 'trade';

export type IServer = '연' | '호동' | '하자' | '유리' | '무휼' | '진';

export interface IPost {
  index: number;
  title: string;
  content: string;
  writer: IWriter;
  views: number;
  commentCount: number;
  recommenders: string[];
  comments: IComment[];
  createdAt: string;
  updatedAt: string;
  server?: IServer;
  video?: string;
}

export interface IWriter {
  userId: string;
  character: string;
}

export interface IComment {
  index: number;
  writer: IWriter;
  content: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  replies?: IComment[];
}
