import mongoose from "mongoose";
import { UserProps } from "../@types/types";
// import { UserProps } from "../@types/types";
const Schema = mongoose.Schema

// ! add a business name, whatsapp contact line and facebook contact to the user table

const UserSchema = new Schema<UserProps>(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: true
    },
    businessName: {
      type: String
    },
    isGoogleUser: {
      type: Boolean,
      default: false
    },
    phoneNumber: {
      type: String,
    },
    whatsapp: {
      type: String,
      default: ''
    },
    profile_picture: {
      type: String,
      default: ''
    },
    isAdmin: {
      type: Boolean,
      default: false
    },

  },
  { timestamps: true }
)

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    status: {
      type: String,
    },
    description: {
      type: String,
      required: true
    },
    negotiable: {
      type: String,
      default: 'no'
    },
    condition: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      required: true
    },
    userId: {
      type: String,
      required: true,
    },
    userInfo: {
      phoneNo: String,
      profile_picture: String,
      whatsapp: String,
      businessName: String
    },
    slug: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true
    },
    school: {
      type: String,
      required: true
    },
    viewCount: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)



let User: mongoose.Model<any>;
let Product: mongoose.Model<any>;

export const initializeModels = () => {
  // Check if the model is already defined
  if (mongoose.models.User) {
    User = mongoose.model('User');
  } else {
    // Define and register the model if not already defined
    User = mongoose.model('User', UserSchema);
  }
};


export const getUserModel = () => {
  if (!User) {
    throw new Error('User model has not been initialized');
  }
  return User;
};

export const initializeProductModel = () => {
  if (mongoose.models.Product) {
    Product = mongoose.model('Product');
  } else {
    Product = mongoose.model('Product', ProductSchema);
  }
}
export const getProductModel = () => {
  if (!Product) {
    throw new Error('Product model has not  been initialized');
  }
  return Product;
}

// export const Product = mongoose.models.Product || mongoose.model('Produc', ProductSchema);