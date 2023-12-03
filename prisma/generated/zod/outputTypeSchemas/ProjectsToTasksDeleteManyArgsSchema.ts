import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksWhereInputSchema } from '../inputTypeSchemas/ProjectsToTasksWhereInputSchema'

export const ProjectsToTasksDeleteManyArgsSchema: z.ZodType<Prisma.ProjectsToTasksDeleteManyArgs> = z.object({
  where: ProjectsToTasksWhereInputSchema.optional(),
}).strict()

export default ProjectsToTasksDeleteManyArgsSchema;
