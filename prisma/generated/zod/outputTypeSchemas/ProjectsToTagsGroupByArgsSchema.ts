import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectsToTagsWhereInputSchema'
import { ProjectsToTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProjectsToTagsOrderByWithAggregationInputSchema'
import { ProjectsToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectsToTagsScalarFieldEnumSchema'
import { ProjectsToTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProjectsToTagsScalarWhereWithAggregatesInputSchema'

export const ProjectsToTagsGroupByArgsSchema: z.ZodType<Prisma.ProjectsToTagsGroupByArgs> = z.object({
  where: ProjectsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsToTagsOrderByWithAggregationInputSchema.array(),ProjectsToTagsOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectsToTagsScalarFieldEnumSchema.array(),
  having: ProjectsToTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectsToTagsGroupByArgsSchema;
