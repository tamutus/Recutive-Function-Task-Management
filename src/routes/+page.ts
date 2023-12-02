import { trpc } from '$tf/client';
import type { PageLoadEvent, PageLoad } from './$types';

export const load: PageLoad = async (event: PageLoadEvent) => {
	event.depends('task:list');
	return {
		tasks: trpc(event).task.list.query()
	};
};
