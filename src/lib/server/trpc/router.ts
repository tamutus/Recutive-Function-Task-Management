import { publicProcedure, router } from '$lib/server/trpc/t';
import { taskRouter } from '$api/task';
import { projectRouter } from '$api/project';

// SvelteKit should block this from being accessed in server code. But it's worth noting that tRPC docs say DON'T export this
export const appRouter = router({
	greeting: publicProcedure.query(async () => {
		return 'Hello';
	}),
	task: taskRouter,
	project: projectRouter
});

export type AppRouter = typeof appRouter;
