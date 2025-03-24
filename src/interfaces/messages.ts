export interface IMessage {
  id: string;
  content: string;
  createdAt: Date;
  status?: string;
  userId?: string;

  owner?: string;
}
