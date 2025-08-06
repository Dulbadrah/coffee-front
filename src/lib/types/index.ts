export type User = {
  id: number;
  email: string;
  password: string;
  username: string;
  createdAt: string;
  profileId: null;
  updatedAt: string;
};
export type Donation = {
  id: number;
  amount: number;
  specialMessage: string;
  socialURLOrBuyMeACoffee: string;
  donorId: number;
  recipientId: number;
  createdAt: string;
  updatedAt: string;
  donor: User;
};
