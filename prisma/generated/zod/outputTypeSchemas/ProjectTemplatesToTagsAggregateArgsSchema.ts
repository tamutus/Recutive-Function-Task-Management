import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsWhereInputSchema'
import { ProjectTemplatesToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsOrderByWithRelationInputSchema'
import { ProjectTemplatesToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsWhereUniqueInputSchema'

export const ProjectTemplatesToTagsAggregateArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTagsAggregateArgs> = z.object({
  where: ProjectTemplatesToTagsWhereInputSchema.optional(),
  orderBy: z.union([ ProjectTemplatesToTagsOrderByWithRelationInputSchema.array(),ProjectTemplatesToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectTemplatesToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectTemplatesToTagsAggregateArgsSchema;
