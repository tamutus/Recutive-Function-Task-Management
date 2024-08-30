import z from 'zod';

import TaskUncheckedCreateInputSchema from '$tIn/TaskUncheckedCreateInputSchema';
import TaskUpdateInputSchema from '$tIn/TaskUpdateInputSchema';
import TaskWhereUniqueInputSchema from '$tIn/TaskWhereUniqueInputSchema';

import { router } from '$tb/t';
import { shieldedProcedure } from '$tb/shield';
import { fetchAuthedUser } from '$lib/server/user';
import { error } from '@sveltejs/kit';

export const taskRouter = router({
	create: shieldedProcedure
		.input(TaskUncheckedCreateInputSchema)
		.mutation(async ({ ctx, input }) => {
			const user = await fetchAuthedUser(ctx);
			if (!user?.person?.id) return;

			return await ctx.prisma.task.create({
				data: {
					name: input.name,
					personId: user.person.id
				}
			});
		}),
	delete: shieldedProcedure.input(TaskWhereUniqueInputSchema).mutation(async ({ ctx, input }) => {
		return await ctx.prisma.task.delete({ where: input });
	}),
	edit: shieldedProcedure
		.input(z.object({ id: z.number().int(), update: TaskUpdateInputSchema }))
		.mutation(async ({ ctx, input }) => {
			const user = await fetchAuthedUser(ctx);
			if (!user?.person?.id) return;
			return await ctx.prisma.task.update({
				where: {
					id: input.id,
					person: {
						id: user.person.id
					}
				},
				data: {
					name: input.update.name,
					info: input.update.info,
					color: input.update.color,
					links: input.update.links
				}
			});
		}),
	get: shieldedProcedure.input(TaskWhereUniqueInputSchema).query(async ({ ctx, input }) => {
		return await ctx.prisma.task.findUnique({ where: input });
	}),
	list: shieldedProcedure.query(async ({ ctx }) => {
		const user = await fetchAuthedUser(ctx);
		if (!user?.person) {
			error(404, new Error('No person found'));
		}
		return ctx.prisma.task.findMany({
			where: {
				personId: user.person.id
			}
		});
	})
});
