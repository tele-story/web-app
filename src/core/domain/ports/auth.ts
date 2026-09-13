import type { Result } from "neverthrow";

export interface AuthPort {
	signIn(): Promise<Result<unknown, Error>>;
    signUp(): Promise<Result<unknown, Error>>;
    signOut(): Promise<Result<unknown, Error>>;
}
