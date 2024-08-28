import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hi from SreeCharan");
});

app.post("/sendmail", async (req, res) => {
  const { email, data } = req.body;
  const Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "noreply.emailhelper@gmail.com",
      pass: "yrlm xsnm msgc ajzz",
    },
  });

  const mailOptions = {
    from: "noreply.emailhelper@gmail.com",
    to: "sreecharan309@gmail.com",
    subject: `Mail from ${email}`,
    text: `Mail from ${email}
    ${data}`,
  };

  const mailStatus = await Transporter.sendMail(mailOptions);
  console.log(mailStatus);

  res.json({ msg: "sent successfully", success: true });
});

app.listen(process.env.PORT_NO_, () => {
  console.log("Listening...");
});
