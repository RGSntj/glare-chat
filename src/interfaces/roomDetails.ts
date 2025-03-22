export interface IRoomDetail {
  id: string;
  createdAt: Date;
  participant: {
    userId: string;
    username: string;
    code: string;
  };
}
