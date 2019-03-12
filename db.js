import mongoose from "mongoose";
const MONGOD_PORT = 27017;
const dbFolder = "we-tube";
mongoose.connect(`mongodb://localhost:${MONGOD_PORT}/${dbFolder}`, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("♻️  Connected to mongoDB");
const handleError = error => console.log(` ❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
