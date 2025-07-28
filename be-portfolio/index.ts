import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { MailRouter } from "./routes/contact";
dotenv.config();

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://enhzaya0111:to9jHSJfU2VaJ1yI@food-delivery.jfs9mpb.mongodb.net/food-delivery"
  );
};

connect();
const app = express();

app.use(cors());
app.use(express.json());

app.use(MailRouter);

const PORT = 8000;
// const url = process.env.MONGODB_URL;

// if (!url) {
//   console.error("MONGO_URI is not defined");
//   process.exit(1);
// }

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
