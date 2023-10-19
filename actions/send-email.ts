"use server";

import React from "react";
import { Resend } from "resend";
import { validate } from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const onSubmit = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  // simple server-side validation
  if (!validate(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validate(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jmosquella11@gmail.com",
      subject: "Message from contact form",
      reply_to: email,
      text: message,
      //   react: React.createElement(ContactFormEmail, {
      //     message: message,
      //     senderEmail: email,
      //   }),
    });

    return { message: "Message sent succesfully", status: 200 };
  } catch (error: unknown) {
    return {
      error: "error",
    };
  }

  return {
    data,
  };
};
