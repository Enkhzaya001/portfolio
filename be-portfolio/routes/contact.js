import sendMail from "../controller/mail.js";
import { Router } from "express";

export const MailRouter = Router();

MailRouter.post("/mail", sendMail);
