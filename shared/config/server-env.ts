import "server-only";

function requireServerEnvironmentVariable(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }

  return value;
}

export const serverEnv = {
  resendApiKey: requireServerEnvironmentVariable("RESEND_API_KEY"),
  resendFromEmail: requireServerEnvironmentVariable("RESEND_FROM_EMAIL"),
  supabaseUrl: requireServerEnvironmentVariable("SUPABASE_URL"),
  supabaseSecretKey: requireServerEnvironmentVariable("SUPABASE_SECRET_KEY"),
  waitlistNotificationEmail: requireServerEnvironmentVariable(
    "WAITLIST_NOTIFICATION_EMAIL",
  ),
};
