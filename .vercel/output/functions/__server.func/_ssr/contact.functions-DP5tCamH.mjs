import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
import { i as createServerFn, r as TSS_SERVER_FUNCTION } from "./server-DgK42Uvq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-DP5tCamH.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function escapeHtml(value) {
	return value.replace(/[&<>"']/g, (char) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	})[char]);
}
function renderAdminEmail(input) {
	const field = (label, value, isEmail = false) => `
    <div style="padding:14px 18px;background:#0d2420;border-radius:10px;border:1px solid #1e4a42;margin-bottom:16px;">
      <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#c9a84c;text-transform:uppercase;letter-spacing:0.15em;">
        ${label}
      </p>
      <p style="margin:0;font-size:15px;color:#ffffff;">
        ${isEmail ? `<a href="mailto:${escapeHtml(value)}" style="color:#7ab8b0;text-decoration:none;">${escapeHtml(value)}</a>` : value ? escapeHtml(value) : `<span style="color:#4a7a72;font-style:italic;">Not provided</span>`}
      </p>
    </div>
  `;
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>New Growth Enquiry</title>
    </head>
    <body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;">

      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;padding:40px 16px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

              <!-- HEADER -->
              <tr>
                <td align="center" style="background:#0d2e29;border-radius:16px 16px 0 0;padding:36px 40px 28px;border-bottom:2px solid #8a6a2b;">
                  <img
                    src="https://www.ai-and-digital-division-website.vercel.app/logo.png"
                    alt="CNI AI & Digital Division"
                    width="80"
                    height="80"
                    style="display:block;margin:0 auto 16px;object-fit:contain;"
                  />
                  <h1 style="margin:0;font-size:22px;font-weight:700;color:#c9a84c;letter-spacing:0.05em;">
                    CNI AI &amp; Digital Division
                  </h1>
                  <p style="margin:6px 0 0;font-size:11px;color:#7ab8b0;letter-spacing:0.2em;text-transform:uppercase;">
                    Intelligent Growth
                  </p>
                </td>
              </tr>

              <!-- BODY -->
              <tr>
                <td style="background:#0f2a25;padding:36px 40px;">
                  <h2 style="margin:0 0 28px;font-size:18px;font-weight:600;color:#ffffff;border-left:3px solid #c9a84c;padding-left:12px;">
                    New Growth Enquiry
                  </h2>
                  ${field("Name", input.name)}
                  ${field("Email", input.email, true)}
                  ${field("Company", input.company)}
                  ${field("Budget / Package", input.budget)}
                  <div style="padding:14px 18px;background:#0d2420;border-radius:10px;border:1px solid #1e4a42;">
                    <p style="margin:0 0 8px;font-size:10px;font-weight:700;color:#c9a84c;text-transform:uppercase;letter-spacing:0.15em;">
                      Business Goals
                    </p>
                    <p style="margin:0;font-size:15px;color:#ffffff;line-height:1.7;white-space:pre-wrap;">
                      ${escapeHtml(input.message)}
                    </p>
                  </div>
                </td>
              </tr>

              <!-- DIVIDER -->
              <tr>
                <td style="background:#0f2a25;padding:0 40px;">
                  <div style="height:1px;background:linear-gradient(to right,transparent,#8a6a2b,transparent);"></div>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td align="center" style="background:#0d2420;border-radius:0 0 16px 16px;padding:24px 40px 28px;">
                  <p style="margin:0 0 6px;font-size:12px;color:#7ab8b0;letter-spacing:0.1em;text-transform:uppercase;">
                    CNI AI &amp; Digital Division
                  </p>
                  <p style="margin:0 0 12px;font-size:11px;color:#3a6a62;">
                    Pakistan &nbsp;&middot;&nbsp; Saudi Arabia
                  </p>
                  <a href="https://www.aidigitaldivision.com" style="font-size:11px;color:#c9a84c;text-decoration:none;letter-spacing:0.05em;">
                    www.aidigitaldivision.com
                  </a>
                  <p style="margin:8px 0 0;font-size:11px;color:#7ab8b0;">
                    <a href="https://wa.me/923427438726" style="color:#7ab8b0;text-decoration:none;">
                      WhatsApp: +92 342 743 8726
                    </a>
                  </p>
                  <p style="margin:16px 0 0;font-size:10px;color:#2a5a52;">
                    This email was sent automatically from the CNI website contact form.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>

    </body>
    </html>
  `;
}
function renderUserConfirmationEmail(input) {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>We received your enquiry</title>
    </head>
    <body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;">

      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;padding:40px 16px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

              <!-- HEADER -->
              <tr>
                <td align="center" style="background:#0d2e29;border-radius:16px 16px 0 0;padding:36px 40px 28px;border-bottom:2px solid #8a6a2b;">
                  <img
                    src="https://www.ai-and-digital-division-website.vercel.app/logo.png"
                    alt="CNI AI & Digital Division"
                    width="80"
                    height="80"
                    style="display:block;margin:0 auto 16px;object-fit:contain;"
                  />
                  <h1 style="margin:0;font-size:22px;font-weight:700;color:#c9a84c;letter-spacing:0.05em;">
                    CNI AI &amp; Digital Division
                  </h1>
                  <p style="margin:6px 0 0;font-size:11px;color:#7ab8b0;letter-spacing:0.2em;text-transform:uppercase;">
                    Intelligent Growth
                  </p>
                </td>
              </tr>

              <!-- BODY -->
              <tr>
                <td style="background:#0f2a25;padding:36px 40px;text-align:center;">

                  <!-- Checkmark -->
                  <div style="width:64px;height:64px;border-radius:50%;background:#0d2420;border:2px solid #c9a84c;margin:0 auto 24px;display:table;">
                    <span style="display:table-cell;vertical-align:middle;font-size:28px;color:#c9a84c;text-align:center;">&#10003;</span>
                  </div>

                  <h2 style="margin:0 0 12px;font-size:22px;font-weight:600;color:#ffffff;">
                    Thank you, ${escapeHtml(input.name)}!
                  </h2>
                  <p style="margin:0 0 24px;font-size:15px;color:#7ab8b0;line-height:1.7;">
                    We've received your enquiry and our team will get back to you
                    within <strong style="color:#c9a84c;">24 hours</strong>.
                  </p>

                  <!-- Summary box -->
                  <div style="background:#0d2420;border-radius:12px;border:1px solid #1e4a42;padding:20px 24px;text-align:left;margin-bottom:24px;">
                    <p style="margin:0 0 8px;font-size:10px;font-weight:700;color:#c9a84c;text-transform:uppercase;letter-spacing:0.15em;">
                      Your Enquiry Summary
                    </p>
                    <p style="margin:8px 0 4px;font-size:13px;color:#7ab8b0;">
                      <strong style="color:#ffffff;">Package / Budget:</strong>&nbsp;
                      ${input.budget ? escapeHtml(input.budget) : "Not specified"}
                    </p>
                    <p style="margin:4px 0;font-size:13px;color:#7ab8b0;">
                      <strong style="color:#ffffff;">Company:</strong>&nbsp;
                      ${input.company ? escapeHtml(input.company) : "Not provided"}
                    </p>
                  </div>

                  <p style="margin:0 0 28px;font-size:13px;color:#4a7a72;line-height:1.6;">
                    While you wait, feel free to reach out to us directly on WhatsApp
                    for a faster response.
                  </p>

                  <!-- CTA Button -->
                  <a
                    href="https://wa.me/923427438726"
                    style="display:inline-block;padding:14px 32px;background:#c9a84c;color:#000000;font-weight:700;font-size:14px;border-radius:8px;text-decoration:none;letter-spacing:0.05em;"
                  >
                    Chat on WhatsApp
                  </a>
                </td>
              </tr>

              <!-- DIVIDER -->
              <tr>
                <td style="background:#0f2a25;padding:0 40px;">
                  <div style="height:1px;background:linear-gradient(to right,transparent,#8a6a2b,transparent);"></div>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td align="center" style="background:#0d2420;border-radius:0 0 16px 16px;padding:24px 40px 28px;">
                  <p style="margin:0 0 6px;font-size:12px;color:#7ab8b0;letter-spacing:0.1em;text-transform:uppercase;">
                    CNI AI &amp; Digital Division
                  </p>
                  <p style="margin:0 0 12px;font-size:11px;color:#3a6a62;">
                    Pakistan &nbsp;&middot;&nbsp; Saudi Arabia
                  </p>
                  <a href="https://www.aidigitaldivision.com" style="font-size:11px;color:#c9a84c;text-decoration:none;letter-spacing:0.05em;">
                    www.aidigitaldivision.com
                  </a>
                  <p style="margin:8px 0 0;font-size:11px;color:#7ab8b0;">
                    <a href="https://wa.me/923427438726" style="color:#7ab8b0;text-decoration:none;">
                      WhatsApp: +92 342 743 8726
                    </a>
                  </p>
                  <p style="margin:16px 0 0;font-size:10px;color:#2a5a52;">
                    You're receiving this because you submitted an enquiry on our website.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>

    </body>
    </html>
  `;
}
/**
* Sends two emails in parallel:
* 1. Admin notification → CONTACT_TO_EMAIL (full enquiry details)
* 2. User confirmation → input.email (thank you + summary + WhatsApp CTA)
*
* ── WHY USER EMAIL MAY NOT ARRIVE ──────────────────────────────────────────
* When using onboarding@resend.dev as the FROM address (dev/test mode),
* Resend restricts delivery to ONLY the email address registered on your
* Resend account. It will NOT send to external user emails.
*
* To send to any email address (including users), you MUST:
* 1. Verify your domain at https://resend.com/domains
*    e.g. aidigitaldivision.com → add the DNS TXT/MX records they give you
* 2. Set CONTACT_FROM_EMAIL=noreply@aidigitaldivision.com in your .env
* 3. Redeploy — after that both admin + user emails will deliver to anyone
*
* Requires in .env:
*   RESEND_API_KEY=re_xxxxxxxxxxxx
*   CONTACT_TO_EMAIL=admin@aidigitaldivision.com
*   CONTACT_FROM_EMAIL=noreply@aidigitaldivision.com  ← must be verified domain
*/
async function sendContactEmail(input) {
	const apiKey = process.env.RESEND_API_KEY;
	const toEmail = process.env.CONTACT_TO_EMAIL || "laraibrafique090@gmail.com";
	const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
	if (!apiKey) {
		console.error("Contact email is not configured: missing RESEND_API_KEY.");
		throw new Error("Email service is not configured (missing RESEND_API_KEY). Please set it in .env.");
	}
	if (fromEmail === "onboarding@resend.dev") console.warn("[Resend] Using test sender onboarding@resend.dev — user confirmation email will only deliver to your Resend account email. Verify your domain at https://resend.com/domains to enable delivery to all users.");
	const resend = new Resend(apiKey);
	const [adminResult, userResult] = await Promise.all([resend.emails.send({
		from: `CNI Website <${fromEmail}>`,
		to: toEmail,
		replyTo: input.email,
		subject: `New Growth Enquiry from ${input.name}`,
		html: renderAdminEmail(input)
	}), resend.emails.send({
		from: `CNI AI & Digital Division <${fromEmail}>`,
		to: input.email,
		subject: `We received your enquiry, ${input.name} \u2713`,
		html: renderUserConfirmationEmail(input)
	})]);
	if (adminResult.error) {
		console.error("Admin email failed:", adminResult.error);
		throw new Error(adminResult.error.message || "We couldn't send your enquiry right now. Please try again shortly.");
	}
	if (userResult.error) console.warn("User confirmation email failed (check domain verification):", userResult.error);
}
var contactFormSchema = objectType({
	name: stringType().trim().min(1, "Name is required."),
	email: stringType().trim().email("Enter a valid email address."),
	company: stringType().trim().optional().default(""),
	budget: stringType().trim().optional().default(""),
	message: stringType().trim().min(1, "Tell us about your business goals.")
});
var submitContactForm_createServerFn_handler = createServerRpc({
	id: "24d672fb73584c0403d628777d6e29971e34c8317bf1373db52c3b2cb37fcb61",
	name: "submitContactForm",
	filename: "src/lib/contact.functions.ts"
}, (opts) => submitContactForm.__executeServer(opts));
var submitContactForm = createServerFn({ method: "POST" }).validator(contactFormSchema).handler(submitContactForm_createServerFn_handler, async ({ data }) => {
	await sendContactEmail(data);
	return { success: true };
});
//#endregion
export { submitContactForm_createServerFn_handler };
