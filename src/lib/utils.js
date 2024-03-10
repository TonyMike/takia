import mongoose from "mongoose";
import {UserSchema, ProductSchema} from './models';

export const connectToDb = async () => {
    const connection = mongoose.createConnection('mongodb+srv://teejhay1:teejhay1@lacoco.pi0lyke.mongodb.net/takia?retryWrites=true&w=majority')
  const User = connection.model('User', UserSchema) || mongoose.model('User', UserSchema)
  const Product = connection.model('Product', ProductSchema) || mongoose.model('Product', ProductSchema)
  return {
    User,
    Product,
  }
}


