import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { MailRouter } from "./routes/contact.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(MailRouter);

const PORT = process.env.PORT || 8000;

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGO_URI is not defined");
  process.exit(1);
}
mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });
