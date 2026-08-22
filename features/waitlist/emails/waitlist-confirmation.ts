import { escapeHtml } from "../utils/escape-html";

type WaitlistConfirmationEmailOptions = {
  confirmationUrl: string;
  firstName: string;
};

export function createWaitlistConfirmationEmail({
  confirmationUrl,
  firstName,
}: WaitlistConfirmationEmailOptions) {
  const safeFirstName = escapeHtml(firstName);
  const safeConfirmationUrl = escapeHtml(confirmationUrl);

  return {
    subject: "Confirm your place on the TekGlove waitlist",
    text: `Hi ${firstName},\n\nConfirm your email to join the TekGlove waitlist:\n${confirmationUrl}\n\nThis link expires in 24 hours. If you did not request this, you can ignore this email.`,
    html: `
      <!doctype html>
      <html lang="en">
        <body style="margin:0;background:#0a0a0a;color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
          <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
            Confirm your email to join the TekGlove waitlist.
          </div>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0a;">
            <tr>
              <td align="center" style="padding:48px 20px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;border:1px solid #292929;border-radius:20px;background:#111111;">
                  <tr>
                    <td style="padding:40px;">
                      <p style="margin:0 0 36px;color:#f97316;font-size:14px;font-weight:700;letter-spacing:0.12em;">TEKGLOVE</p>
                      <h1 style="margin:0 0 18px;color:#ffffff;font-size:32px;line-height:1.15;">Confirm your place.</h1>
                      <p style="margin:0 0 14px;color:#d4d4d4;font-size:16px;line-height:1.6;">Hi ${safeFirstName},</p>
                      <p style="margin:0 0 28px;color:#a3a3a3;font-size:16px;line-height:1.6;">Confirm your email to join the TekGlove waitlist and receive product updates and early access invitations.</p>
                      <a href="${safeConfirmationUrl}" style="display:inline-block;border-radius:999px;background:#f97316;color:#111111;font-size:15px;font-weight:700;text-decoration:none;padding:14px 22px;">Confirm my email</a>
                      <p style="margin:28px 0 0;color:#8a8a8a;font-size:13px;line-height:1.6;">This link expires in 24 hours. If you did not request this, you can ignore this email.</p>
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
