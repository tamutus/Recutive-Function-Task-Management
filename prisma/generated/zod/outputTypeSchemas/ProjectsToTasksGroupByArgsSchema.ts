import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksWhereInputSchema } from '../inputTypeSchemas/ProjectsToTasksWhereInputSchema'
import { ProjectsToTasksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProjectsToTasksOrderByWithAggregationInputSchema'
import { ProjectsToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectsToTasksScalarFieldEnumSchema'
import { ProjectsToTasksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProjectsToTasksScalarWhereWithAggregatesInputSchema'

export const ProjectsToTasksGroupByArgsSchema: z.ZodType<Prisma.ProjectsToTasksGroupByArgs> = z.object({
  where: ProjectsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsToTasksOrderByWithAggregationInputSchema.array(),ProjectsToTasksOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectsToTasksScalarFieldEnumSchema.array(),
  having: ProjectsToTasksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectsToTasksGroupByArgsSchema;
