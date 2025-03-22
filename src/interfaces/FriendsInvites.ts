export interface FriendsInvites {
  id: string;
  status: string;
  userId: string;
  friendId: string;
  createdAt: Date;
  updatedAt: Date;
  sender: {
    username: string;
    code: string;
  };
}
