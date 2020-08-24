import { adjectives, nouns } from "./words";
import jwt from "jsonwebtoken";
const nodemailer = require("nodemailer");
const smtpPool = require("nodemailer-smtp-pool");

const smtpTransport = nodemailer.createTransport(
  smtpPool({
    service: "Gmail",
    host: "localhost",
    port: "465",
    tls: {
      rejectUnauthorize: false,
    },

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSPORT,
    },
    maxConnections: 5,
    maxMessages: 10,
  })
);

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);

  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = async (email) => {
  await smtpTransport.sendMail(email, function(err, info) {
    if (err) {
      console.error("Send Mail error : ", err);
      //smtpTransport.close();
    } else {
      console.log("Message sent : ", info);
      //smtpTransport.close();
    }
  });
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "4leaf@test.com",
    to: adress,
    subject: "🔐 Login Secret For 4LEAF TEST PROCESS",
    html: `Hello! Your Login Secret Its <strong>${secret}</strong>.<br /> Copy Paste On The App/Website To login`,
  };

  return sendMail(email);
};

export const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);
