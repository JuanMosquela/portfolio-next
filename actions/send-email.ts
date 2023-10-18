"use server";

export const onSubmit = (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  console.log(message, email);
};
