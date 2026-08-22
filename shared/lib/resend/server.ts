import "server-only";
import { Resend } from "resend";
import { serverEnv } from "@/shared/config/server-env";

export const resend = new Resend(serverEnv.resendApiKey);
