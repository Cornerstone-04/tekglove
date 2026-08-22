import { ecosystemProducts } from "@/content/products";
import { escapeHtml } from "../utils/escape-html";

type WaitlistNotificationEmailOptions = {
  countryCode: string | null;
  email: string;
  firstName: string;
  intendedUse: string | null;
  lastName: string;
  organisationName: string | null;
  productInterests: string[];
  useCase: string | null;
};

function formatValue(value: string | null) {
  return value?.trim() || "Not provided";
}

function formatIntendedUse(value: string | null) {
  return value
    ? value
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Not provided";
}

function formatProductInterests(productInterests: string[]) {
  return productInterests
    .map(
      (slug) =>
        ecosystemProducts.find((product) => product.slug === slug)?.name ??
        slug,
    )
    .join(", ");
}

export function createWaitlistNotificationEmail(
  options: WaitlistNotificationEmailOptions,
) {
  const fullName = `${options.firstName} ${options.lastName}`;
  const productInterests =
    formatProductInterests(options.productInterests) || "Not provided";
  const intendedUse = formatIntendedUse(options.intendedUse);
  const country = formatValue(options.countryCode);
  const organisation = formatValue(options.organisationName);
  const useCase = formatValue(options.useCase);
  const rows = [
    ["Email", options.email],
    ["Interested in", productInterests],
    ["Intended use", intendedUse],
    ["Country", country],
    ["Organisation", organisation],
    ["Use case", useCase],
  ];

  return {
    subject: `New confirmed TekGlove signup: ${fullName}`,
    text: `A new subscriber confirmed their TekGlove waitlist place.\n\nName: ${fullName}\nEmail: ${options.email}\nInterested in: ${productInterests}\nIntended use: ${intendedUse}\nCountry: ${country}\nOrganisation: ${organisation}\nUse case: ${useCase}`,
    html: `
      <!doctype html>
      <html lang="en">
        <body style="margin:0;background:#0a0a0a;color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0a;">
            <tr>
              <td align="center" style="padding:40px 20px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;border:1px solid #292929;border-radius:20px;background:#111111;">
                  <tr>
                    <td style="padding:40px;">
                      <p style="margin:0 0 32px;color:#f97316;font-size:14px;font-weight:700;letter-spacing:0.12em;">TEKGLOVE WAITLIST</p>
                      <h1 style="margin:0 0 12px;color:#ffffff;font-size:30px;line-height:1.2;">New confirmed signup</h1>
                      <p style="margin:0 0 30px;color:#a3a3a3;font-size:15px;line-height:1.6;">${escapeHtml(fullName)} has verified their email address.</p>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                        ${rows
                          .map(
                            ([label, value]) => `
                              <tr>
                                <td style="width:130px;border-top:1px solid #292929;padding:14px 16px 14px 0;color:#8a8a8a;font-size:13px;vertical-align:top;">${escapeHtml(label)}</td>
                                <td style="border-top:1px solid #292929;padding:14px 0;color:#e5e5e5;font-size:14px;line-height:1.5;">${escapeHtml(value)}</td>
                              </tr>
                            `,
                          )
                          .join("")}
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };
}
