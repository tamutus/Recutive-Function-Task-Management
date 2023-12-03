import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesWhereInputSchema'
import { ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema'
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema'

export const ProjectTemplatesToTaskTemplatesAggregateArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesAggregateArgs> = z.object({
  where: ProjectTemplatesToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema.array(),ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectTemplatesToTaskTemplatesAggregateArgsSchema;
