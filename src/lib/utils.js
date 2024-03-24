import mongoose from "mongoose";

const connectString = 'mongodb+srv://teejhay1:teejhay1@lacoco.pi0lyke.mongodb.net/takia?retryWrites=true&w=majority'
// export const connectToDb = async () => {
//   const connection = mongoose.createConnection(connectString)
//   const User = connection.model('User', UserSchema) || mongoose.model('User', UserSchema)
//   const Product = connection.model('Product', ProductSchema) || mongoose.model('Product', ProductSchema)
//   return {
//     User,
//     Product,
//   }
// }

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect('mongodb+srv://teejhay1:teejhay1@lacoco.pi0lyke.mongodb.net/takia?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// export const connectDb = async () => {
//   if (mongoose.connection?.readyState >= 0) {
//     console.log("Already connected to MongoDB")
//     return;
//   }
//   try {
//     await mongoose.connect('mongodb+srv://teejhay1:teejhay1@lacoco.pi0lyke.mongodb.net/takia?retryWrites=true&w=majority')
//     console.log("---------Connected to MongoDB-----------")
//   } catch (error) {
//     console.error("Error connecting to MongoDB: ", error)
//   }
// }

