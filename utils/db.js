const URL = `mongodb+srv://dbjowett:${process.env.MONGO_DB}@cluster0.xjcmz.mongodb.net/cocktails?retryWrites=true&w=majority`;
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  const db = await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

export default connectToDatabase;
