// Import necessary modules
import express, { Request, Response } from "express"; // Importing express for creating the server and Request and Response for type checking
import cors from "cors"; // Importing cors for enabling Cross-Origin Resource Sharing
import dotenv from "dotenv"; // Importing dotenv for loading environment variables
import nodemailer from "nodemailer"; // Importing nodemailer for sending emails

// Load environment variables from .env file
dotenv.config(); 

// Create express app
const app = express();
// Use middleware to parse JSON requests
app.use(express.json());
// Use cors middleware to enable CORS
app.use(cors());

// Define a GET request handler for the root route ("/")
app.get("/", (req: Request, res: Response) => {
  // Send a response to the client
  res.send("Hi from SreeCharan");
});

// Define a POST request handler for the "/sendmail" route
app.post("/sendmail", async (req, res) => {
  // Extract email and data from the request body
  const { email, data } = req.body;

  // Create a nodemailer transporter using Gmail service
  const Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "noreply.emailhelper@gmail.com", // Replace with your Gmail email
      pass: "yrlm xsnm msgc ajzz", // Replace with your Gmail password or app password
    },
  });

  // Define email options
  const mailOptions = {
    from: "noreply.emailhelper@gmail.com", // Replace with your Gmail email
    to: "sreecharan309@gmail.com", // Replace with the recipient's email
    subject: `Mail from ${email}`, // Set email subject
    text: `Mail from ${email} \n ${data}`, // Set email body
  };

  // Send email and store the result in mailStatus
  const mailStatus = await Transporter.sendMail(mailOptions);
  // Log the mail status to the console
  console.log(mailStatus);

  // Send a JSON response indicating success
  res.json({ msg: "sent successfully", success: true });
});

// Start the server and listen on the specified port
app.listen(process.env.PORT_NO_, () => {
  // Log a message to the console indicating the server is listening
  console.log("Listening...");
});
