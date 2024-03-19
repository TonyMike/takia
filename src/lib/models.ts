import mongoose from "mongoose";
const Schema = mongoose.Schema

// ! add a business name, whatsapp contact line and facebook contact to the user table

export const UserSchema = new Schema(
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
      default: '09164209289'
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

// ! add view count
export const ProductSchema = new Schema(
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
