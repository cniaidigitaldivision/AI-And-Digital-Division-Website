import { Resend } from "resend";

export type ContactEmailInput = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      (
        {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        } as Record<string, string>
      )[char]!,
  );
}

function renderContactEmailHtml(input: ContactEmailInput) {
  const row = (label: string, value: string) =>
    `<p style="margin:0 0 12px;"><strong style="color:#8a6a2b;">${label}:</strong> ${escapeHtml(value) || "—"}</p>`;

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0f1e1c;">
      <h2 style="margin:0 0 16px;">New Growth Enquiry</h2>
      ${row("Name", input.name)}
      ${row("Email", input.email)}
      ${row("Company", input.company)}
      ${row("Budget / Package", input.budget)}
      <p style="margin:16px 0 4px;"><strong style="color:#8a6a2b;">Business goals:</strong></p>
      <p style="white-space:pre-wrap;margin:0;">${escapeHtml(input.message)}</p>
    </div>
  `;
}

/**
 * Sends the contact form submission to the business inbox via Resend.
 * Requires RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL to be set
 * in the environment (see .env). CONTACT_FROM_EMAIL must be on a domain
 * verified with Resend (https://resend.com/domains), or Resend will reject
 * the send.
 */
export async function sendContactEmail(input: ContactEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "laraibrafique090@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    console.error(
      "Contact email is not configured: missing RESEND_API_KEY environment variable.",
    );
    throw new Error("Email service is not configured (missing RESEND_API_KEY). Please set RESEND_API_KEY in .env.");
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Crescent Nova Website <${fromEmail}>`,
    to: toEmail,
    replyTo: input.email,
    subject: `New Growth Enquiry from ${input.name}`,
    html: renderContactEmailHtml(input),
  });

  if (error) {
    console.error("Resend send failed:", error);
    throw new Error(error.message || "We couldn't send your enquiry right now. Please try again shortly.");
  }
}
