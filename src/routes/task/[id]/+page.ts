import { trpc } from '$tf/client';
import type { PageLoadEvent, PageLoad } from './$types';

export const load: PageLoad = async (event: PageLoadEvent) => {
	return {
		parent: event.parent(),
		task: await trpc(event).task.get.query({ id: Number(event.params.id) })
	};
};
