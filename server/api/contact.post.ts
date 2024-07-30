import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, message } = body;
  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.gmailUser,
      pass: config.gmailPass,
    },
  });

  const mailOptions = {
    from: email,
    to: config.gmailUser,
    subject: `New message from ${name}`,
    text: `This is ${name}. \n My Email: ${email}. \n ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
});
