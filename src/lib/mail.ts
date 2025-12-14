// src/lib/mail.ts
import sgMail from "@sendgrid/mail";
import type { MailDataRequired } from "@sendgrid/mail";

type MailInput = {
  to?: string;
  from?: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
};

export async function sendMail({ to, from, subject, text, html, replyTo }: MailInput) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const content =
    (html
      ? [{ type: "text/html", value: html }]
      : [{ type: "text/plain", value: text ?? "" }]) as [
      { type: "text/html" | "text/plain"; value: string }
    ];


  const msg: MailDataRequired = {
    to: to ?? process.env.CONTACT_TO!,
    from: process.env.CONTACT_FROM!, // <-- MUST have !
    subject,
    content,
    ...(replyTo ? { replyTo } : {}), // <-- only include if defined
  };



  await sgMail.send(msg);
}
