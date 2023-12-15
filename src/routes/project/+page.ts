import { trpc } from '$tf/client';
import type { PageLoadEvent, PageLoad } from './$types';

export const load: PageLoad = async (event: PageLoadEvent) => {
	event.depends('project:list');
	return {
		projects: trpc(event).project.list.query()
	};
};
