import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendContactEmail } from "./contact-email.server";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("Enter a valid email address."),
  company: z.string().trim().optional().default(""),
  budget: z.string().trim().optional().default(""),
  message: z.string().trim().min(1, "Tell us about your business goals."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(contactFormSchema)
  .handler(async ({ data }) => {
    await sendContactEmail(data);
    return { success: true as const };
  });
