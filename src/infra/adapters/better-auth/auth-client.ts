import { createAuthClient } from 'better-auth/react'
import { telegramClient } from "better-auth-telegram/client";

export const authClient = createAuthClient({
    fetchOptions: {
        credentials: "include"
    },
    plugins: [
        telegramClient()
    ]
})
