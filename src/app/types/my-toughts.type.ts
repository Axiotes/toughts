export type MyToughts = {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  Toughts: {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    UserId: number;
  }[];
};
