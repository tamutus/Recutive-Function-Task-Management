import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import prismaClient from '$lib/server/prismaClient';

export async function createContext(event: RequestEvent) {
	return {
		prisma: prismaClient
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
