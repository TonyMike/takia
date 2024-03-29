import { Document } from "mongoose";

export interface selectProp {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  handleChange?: any
}

export interface categoryProp {
  category: string;
  icon: string;
}
// export stringProp
export interface UserProps extends Document {
  // _id?: string; // Not needed as it is added by mongoose
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
  businessName?: string;
  isGoogleUser?: boolean;
  phoneNumber?: string;
  whatsapp?: string;
  profile_picture?: string;
  isAdmin?: boolean;
}