import { SvelteKitAuth } from '@auth/sveltekit';
import Github from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import Authentik from '@auth/sveltekit/providers/authentik';
import type { Adapter } from '@auth/core/adapters';

import { env } from '$env/dynamic/private';

import prismaClient from '$lib/server/prismaClient';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const handle = SvelteKitAuth({
	adapter: PrismaAdapter(prismaClient) as Adapter,
	providers: [
		Github({
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET
		}),
		Google({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET
		})
	],
	secret: env.AUTH_SECRET,
	debug: true,
	trustHost: true
	// pages: {
	// 	signIn: '/auth/login',
	// 	signOut: '/auth/logout'
	// }
});
