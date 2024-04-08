import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://OlleOllsson:test1234@hakimslivs4.zrzjb7b.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
