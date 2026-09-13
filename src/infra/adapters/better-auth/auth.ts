import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { telegram } from "better-auth-telegram";
import { env } from "#/env.ts";
import { db } from "../db";

const telegramPlugin = telegram({
	botToken: env.TELEGRAM_BOT_TOKEN,
	botUsername: env.TELEGRAM_BOT_USERNAME,
	oidc: {
		enabled: true,
		clientId: env.TELEGRAM_OIDC_CLIENT_ID,
		clientSecret: env.TELEGRAM_OIDC_CLIENT_SECRET,
		requestPhone: true,
	},
	allowUserToLink: true,
	autoCreateUser: true,
});

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [
		tanstackStartCookies(),
		telegramPlugin,
	],
	trustedOrigins: [env.BETTER_AUTH_URL],
	logger: {
		disabled: false,
		level: "debug",
	},
});
