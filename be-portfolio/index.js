import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { MailRouter } from "./routes/contact.js";

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://enhzaya0111:to9jHSJfU2VaJ1yI@food-delivery.jfs9mpb.mongodb.net/food-delivery"
  );
};

connect();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(MailRouter);

// const PORT = process.env.PORT || 8000;

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGO_URI is not defined");
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
