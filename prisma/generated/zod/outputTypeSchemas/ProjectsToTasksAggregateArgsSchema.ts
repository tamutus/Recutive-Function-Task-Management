import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksWhereInputSchema } from '../inputTypeSchemas/ProjectsToTasksWhereInputSchema'
import { ProjectsToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectsToTasksOrderByWithRelationInputSchema'
import { ProjectsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectsToTasksWhereUniqueInputSchema'

export const ProjectsToTasksAggregateArgsSchema: z.ZodType<Prisma.ProjectsToTasksAggregateArgs> = z.object({
  where: ProjectsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsToTasksOrderByWithRelationInputSchema.array(),ProjectsToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectsToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectsToTasksAggregateArgsSchema;
