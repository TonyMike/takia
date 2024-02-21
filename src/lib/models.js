import mongoose from "mongoose";
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: String,
    socialLink: [
      {
        social: String,
        link: String
      }
    ],
    state: {
      type: String
    },
    school: {
      type: String
    },
    profile_picture: {
      type: String
    },
  },
  { timestamps: true }
)


const ProductSchema = Schema(
  {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    ownerEmail: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    condition: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    subCategory: {
      type: String,
      required: true
    },
    images: {
      type: [String]
      // required: true
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    brandDetails: [
      {
        key: String,
        value: String
      }
    ]
  },
  { timestamps: true }
)


export const User = mongoose.models.User || mongoose.model('User', UserSchema)
export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)