import { publicProcedure, router } from '$tb/t';
import TaskCreateInputSchema from '$tIn/TaskCreateInputSchema';
import TaskUpdateInputSchema from '$tIn/TaskUpdateInputSchema';
import TaskModelSchema from '$tModel/TaskSchema';
import TaskWhereUniqueInputSchema from '$tIn/TaskWhereUniqueInputSchema';

export const taskRouter = router({
	create: publicProcedure.input(TaskCreateInputSchema).mutation(async ({ ctx, input }) => {
		return await ctx.prisma.task.create({
			data: input
		});
	}),
	delete: publicProcedure.input(TaskWhereUniqueInputSchema).mutation(async ({ ctx, input }) => {
		return await ctx.prisma.task.delete({ where: input });
	}),
	edit: publicProcedure.input(TaskModelSchema.partial()).mutation(async ({ ctx, input }) => {
		return await ctx.prisma.task.update({
			where: {
				id: input.id
			},
			data: {
				name: input.name
			}
		});
	}),
	get: publicProcedure.input(TaskWhereUniqueInputSchema).query(async ({ ctx, input }) => {
		return await ctx.prisma.task.findUnique({ where: input });
	}),
	list: publicProcedure.query(async ({ ctx }) => {
		return await ctx.prisma.task.findMany();
	})
});
