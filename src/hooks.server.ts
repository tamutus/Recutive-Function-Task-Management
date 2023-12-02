import { redirect } from '@sveltejs/kit';
import type { Handle, HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { env } from '$env/dynamic/private';

import { createTRPCHandle } from 'trpc-sveltekit';

import { SvelteKitAuth } from '@auth/sveltekit';
import Github from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';

import prismaClient from '$lib/server/prismaClient';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { appRouter } from '$tb/router';
import { createContext } from '$tb/context';

export const handleError: HandleServerError = ({ error }) => {
	console.error(error);
	return {
		message: 'Server side error'
	};
};

const authorization = SvelteKitAuth(async (event) => {
	const authOptions = {
		adapter: PrismaAdapter(prismaClient),
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
	};
	return authOptions;
}) satisfies Handle;

// const session = await event.locals.getSession();
// if (event.url.pathname.startsWith('/authenticated')) {
// 	if (!session) {
// 		throw redirect(303, '/auth');
// 	}
// }

// If the request is still here, just proceed as normally
// return resolve(event);
// }) satisfies Handle;

export const trpcHandle: Handle = createTRPCHandle({ router: appRouter, createContext });

// export const trpc = async ({ event, resolve }) => {
// 	const response = await createTRPCHandle({
// 		url: '/trpc', // optional; defaults to '/trpc'
// 		event,
// 		resolve,
//     router,
// 		createContext, // optional
// 		responseMeta({ type, errors }) {
//       if (type === 'query' && errors.length === 0) {
//         const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
//         return {
//           headers: {
//             'cache-control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`
//           }
//         };
//       }
//       return {};
//     }, // optional

// 	})

// 	return response
// };

export const handle: Handle = sequence(
	authorization,
	trpcHandle
	// corsDevelopment
);
