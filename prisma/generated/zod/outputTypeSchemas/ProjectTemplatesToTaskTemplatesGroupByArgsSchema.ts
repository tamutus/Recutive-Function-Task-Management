import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesWhereInputSchema'
import { ProjectTemplatesToTaskTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesOrderByWithAggregationInputSchema'
import { ProjectTemplatesToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesScalarFieldEnumSchema'
import { ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema'

export const ProjectTemplatesToTaskTemplatesGroupByArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesGroupByArgs> = z.object({
  where: ProjectTemplatesToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ ProjectTemplatesToTaskTemplatesOrderByWithAggregationInputSchema.array(),ProjectTemplatesToTaskTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectTemplatesToTaskTemplatesScalarFieldEnumSchema.array(),
  having: ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectTemplatesToTaskTemplatesGroupByArgsSchema;
