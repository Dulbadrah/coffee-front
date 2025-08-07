import { ReactNode } from "react";

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
  successMessege: ReactNode;
  email: ReactNode;
  date: string;
  name: string;
  id: number;
  amount: number;
  specialMessage: string;
  socialURLOrBuyMeACoffee: string;
  donorId: number;
  recipientId: number;
  createdAt: string;
  updatedAt: string;
  donor: User;
  profile: Profile;
};

export type Profile = {
  id: number;
  name: string;
  about: string;
  avatarImage: string;
  socialMediaURL: string;
  backgroundImage: string;
  successMessage: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  user: User;
};

export type ProfileType = {
  id: number;
  name: string;
  about: string;
  avatarImage: string;
  socialMediaURL: string;
  backgroundImage: string;
  successMessage: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  user: User;
};
