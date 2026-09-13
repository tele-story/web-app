import { authClient } from "#/infra/adapters/better-auth/auth-client.ts";

export function Widget() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Telegram Login Widget</h1>
      <p className="text-lg text-gray-600">
        This is a placeholder for the Telegram login widget.
      </p>
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={async () => {
            await authClient.signInWithTelegramOIDC({
                callbackURL: "/dashboard",
            })
        }}
      >
        Login via Telegram
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Sign up via Telegram
      </button>
    </div>
  );
}