import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  mongoose.plugin(uniqueValidator);
};

export default connect;
