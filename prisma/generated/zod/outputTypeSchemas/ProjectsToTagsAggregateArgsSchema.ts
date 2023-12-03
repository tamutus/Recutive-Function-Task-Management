import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectsToTagsWhereInputSchema'
import { ProjectsToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectsToTagsOrderByWithRelationInputSchema'
import { ProjectsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectsToTagsWhereUniqueInputSchema'

export const ProjectsToTagsAggregateArgsSchema: z.ZodType<Prisma.ProjectsToTagsAggregateArgs> = z.object({
  where: ProjectsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsToTagsOrderByWithRelationInputSchema.array(),ProjectsToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectsToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectsToTagsAggregateArgsSchema;
