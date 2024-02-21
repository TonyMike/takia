const { default: mongoose } = require('mongoose')

const connection = {}
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection')
      return;
    }
    const db = await mongoose.connect('mongodb+srv://teejhay1:teejhay1@lacoco.pi0lyke.mongodb.net/takia?retryWrites=true&w=majority');
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.error(error)
    throw new Error('Couldn\'t connect to Mongo', error)
  }
}