export type AllTought = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  User: {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
};
