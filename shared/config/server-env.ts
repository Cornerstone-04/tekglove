import "server-only";

function requireServerEnvironmentVariable(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }

  return value;
}

export const serverEnv = {
  supabaseUrl: requireServerEnvironmentVariable("SUPABASE_URL"),
  supabaseSecretKey: requireServerEnvironmentVariable("SUPABASE_SECRET_KEY"),
};
