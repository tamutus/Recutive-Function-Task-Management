import z from 'zod';

import ProjectUncheckedCreateInputSchema from '$tIn/ProjectUncheckedCreateInputSchema';
import ProjectUpdateInputSchema from '$tIn/ProjectUpdateInputSchema';
import ProjectWhereUniqueInputSchema from '$tIn/ProjectWhereUniqueInputSchema';

import { router } from '$tb/t';
import { shieldedProcedure } from '$tb/shield';
import { fetchAuthedUser } from '$lib/server/user';

export const projectRouter = router({
	create: shieldedProcedure
		.input(ProjectUncheckedCreateInputSchema)
		.mutation(async ({ ctx, input }) => {
			const user = await fetchAuthedUser(ctx);
			if (!user?.person?.id) return;
			return await ctx.prisma.project.create({
				data: {
					...input,
					volunteers: {
						create: {
							person: {
								connect: {
									id: user.person.id
								}
							}
						}
					}
				}
			});
		}),
	delete: shieldedProcedure
		.input(ProjectWhereUniqueInputSchema)
		.mutation(async ({ ctx, input }) => {
			const user = await fetchAuthedUser(ctx);
			if (!user?.person?.id) return;
			return await ctx.prisma.project.delete({
				where: {
					...input,
					volunteers: {
						some: {
							personId: user.person.id
						}
					}
				}
			});
		}),
	edit: shieldedProcedure
		.input(z.object({ id: z.number().int(), update: ProjectUpdateInputSchema }))
		.mutation(async ({ ctx, input }) => {
			const user = await fetchAuthedUser(ctx);
			if (!user?.person?.id) return;
			return await ctx.prisma.project.update({
				where: {
					id: input.id,
					volunteers: {
						some: {
							personId: user.person.id
						}
					}
				},
				data: {
					name: input.update.name
				}
			});
		}),
	get: shieldedProcedure.input(ProjectWhereUniqueInputSchema).query(async ({ ctx, input }) => {
		return await ctx.prisma.project.findUnique({ where: input });
	}),
	list: shieldedProcedure.query(async ({ ctx }) => {
		const user = await fetchAuthedUser(ctx);
		if (!user?.person?.id) return;
		return await ctx.prisma.project.findMany({
			where: {
				volunteers: {
					some: {
						personId: user.person.id
					}
				}
			}
		});
	})
});
