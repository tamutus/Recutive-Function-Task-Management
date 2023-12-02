import { publicProcedure, router } from '$tb/t';
import ProjectCreateInputSchema from '$tIn/ProjectCreateInputSchema';

export const projectRouter = router({
	list: publicProcedure.query(async ({ ctx }) => {
		return await ctx.prisma.project.findMany();
	}),
	create: publicProcedure.input(ProjectCreateInputSchema).mutation(async ({ ctx, input }) => {
		return await ctx.prisma.project.create({ data: input });
	})
});
