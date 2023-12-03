import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsWhereInputSchema'
import { ProjectTemplatesToTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsOrderByWithAggregationInputSchema'
import { ProjectTemplatesToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsScalarFieldEnumSchema'
import { ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema'

export const ProjectTemplatesToTagsGroupByArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTagsGroupByArgs> = z.object({
  where: ProjectTemplatesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectTemplatesToTagsOrderByWithAggregationInputSchema.array(),ProjectTemplatesToTagsOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectTemplatesToTagsScalarFieldEnumSchema.array(),
  having: ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectTemplatesToTagsGroupByArgsSchema;
