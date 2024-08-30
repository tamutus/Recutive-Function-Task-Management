import { redirect } from '@sveltejs/kit';
import type { Handle, HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { createTRPCHandle } from 'trpc-sveltekit';

import { handle as authHandle } from '$lib/auth/handle';

import { appRouter } from '$tb/router';
import { createContext } from '$tb/context';

export const handleError: HandleServerError = ({ error }) => {
	console.error(error);
	return {
		message: 'Server side error'
	};
};

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
	authHandle,
	trpcHandle
	// corsDevelopment
);
