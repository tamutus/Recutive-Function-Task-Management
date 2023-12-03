import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProjectsToTasksUpdateManyMutationInputSchema'
import { ProjectsToTasksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProjectsToTasksUncheckedUpdateManyInputSchema'
import { ProjectsToTasksWhereInputSchema } from '../inputTypeSchemas/ProjectsToTasksWhereInputSchema'

export const ProjectsToTasksUpdateManyArgsSchema: z.ZodType<Prisma.ProjectsToTasksUpdateManyArgs> = z.object({
  data: z.union([ ProjectsToTasksUpdateManyMutationInputSchema,ProjectsToTasksUncheckedUpdateManyInputSchema ]),
  where: ProjectsToTasksWhereInputSchema.optional(),
}).strict()

export default ProjectsToTasksUpdateManyArgsSchema;
