import { Router } from "express";
import sendMail from "../controller/mail";

export const MailRouter = Router();

MailRouter.post("/mail", sendMail);
