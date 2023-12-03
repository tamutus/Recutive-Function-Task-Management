import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksCreateManyInputSchema } from '../inputTypeSchemas/ProjectsToTasksCreateManyInputSchema'

export const ProjectsToTasksCreateManyArgsSchema: z.ZodType<Prisma.ProjectsToTasksCreateManyArgs> = z.object({
  data: z.union([ ProjectsToTasksCreateManyInputSchema,ProjectsToTasksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ProjectsToTasksCreateManyArgsSchema;
