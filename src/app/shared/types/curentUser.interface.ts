export interface CurrentUserInterface {
  id: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  bio: string | null;
  image: any | null;
  token: string;
}
