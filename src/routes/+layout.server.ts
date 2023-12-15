import type { LayoutServerLoad, LayoutServerLoadEvent } from './$types';
import { trpc } from '$tf/client';
export const load: LayoutServerLoad = async (event: LayoutServerLoadEvent) => {
	event.depends('task:list');
	return {
		session: await event.locals.getSession(),
		tasks: trpc(event).task.list.query()
	};
};
