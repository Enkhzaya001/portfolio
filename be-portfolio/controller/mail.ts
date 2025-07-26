import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendMail = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `Portfolio Contact from ${name}`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent!", info });
  } catch (err) {
    console.error("Mail send error: ", err);
    res.status(500).json({ error: "Failed to send email" });
  }
};

export default sendMail;

// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // Gmail хаяг
//         pass: process.env.EMAIL_PASS, // App Password эсвэл account-н нууц үг
//       },
//     });

//     await transporter.sendMail({
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_RECEIVER, // таны хүлээн авах хаяг
//       subject: "📩 New Contact Form Submission",
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     });

//     return res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Email error:", error);
//     return res.status(500).json({ message: "Something went wrong." });
//   }
// }
