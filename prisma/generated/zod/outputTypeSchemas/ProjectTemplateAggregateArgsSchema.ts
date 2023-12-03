import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateWhereInputSchema } from '../inputTypeSchemas/ProjectTemplateWhereInputSchema'
import { ProjectTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectTemplateOrderByWithRelationInputSchema'
import { ProjectTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectTemplateWhereUniqueInputSchema'

export const ProjectTemplateAggregateArgsSchema: z.ZodType<Prisma.ProjectTemplateAggregateArgs> = z.object({
  where: ProjectTemplateWhereInputSchema.optional(),
  orderBy: z.union([ ProjectTemplateOrderByWithRelationInputSchema.array(),ProjectTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectTemplateAggregateArgsSchema;
