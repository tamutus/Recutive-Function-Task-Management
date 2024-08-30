// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Error {
		code?: number;
	}
	interface Locals {
		getSession(): Promise<Session | null>;
	}
	interface PageData {
		session?: Session | null | undefined;
	}
	// interface Platform {}
}
