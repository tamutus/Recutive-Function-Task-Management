import { router } from '$lib/server/trpc/t';
import { taskRouter } from '$api/task';
import { projectRouter } from '$api/project';
import { personRouter } from '$api/person';
// import { energyRouter } from '$api/energy';
// import { priorityRouter } from '$api/priority';
// import { tagRouter } from '$api/tag';
// import { skillRouter } from '$api/skill';

// SvelteKit should block this from being accessed in server code. But it's worth noting that tRPC docs say DON'T export this
export const appRouter = router({
	person: personRouter,
	project: projectRouter,
	task: taskRouter
	// energy: energyRouter,
	// priority: priorityRouter,
	// skill: skillRouter,
	// tag: tagRouter,
});

export type AppRouter = typeof appRouter;
