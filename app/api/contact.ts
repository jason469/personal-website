import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";

const CONTACT_FORM_FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL as string;
const CONTACT_FORM_TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL as string;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN as string;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY as string;

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY,

  // This needs to be customized based on your Mailgun region
  url: "https://api.eu.mailgun.net",
});

async function contact(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  // Only allow post requests
  if (req.method !== "POST") {
    return res.status(404).end();
  }

  // Get the form data from the request body
  const { name, email, message } = req.body;

  // Put together the email text
  const text = ["From: " + name + "<" + email + ">\n", message].join("\n");

  // Send the email using Mailgun
  await mg.messages.create(MAILGUN_DOMAIN, {
    subject: "New contact form submission",
    from: CONTACT_FORM_FROM_EMAIL,
    to: CONTACT_FORM_TO_EMAIL,
    text,
    "h:Reply-To": email,
  });

  // Send a 200 OK response
  res.status(200).json({ status: "ok" } as any);
}

export default contact;
