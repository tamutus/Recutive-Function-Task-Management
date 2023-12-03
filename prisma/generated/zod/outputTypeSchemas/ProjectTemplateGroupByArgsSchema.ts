import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateWhereInputSchema } from '../inputTypeSchemas/ProjectTemplateWhereInputSchema'
import { ProjectTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProjectTemplateOrderByWithAggregationInputSchema'
import { ProjectTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectTemplateScalarFieldEnumSchema'
import { ProjectTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProjectTemplateScalarWhereWithAggregatesInputSchema'

export const ProjectTemplateGroupByArgsSchema: z.ZodType<Prisma.ProjectTemplateGroupByArgs> = z.object({
  where: ProjectTemplateWhereInputSchema.optional(),
  orderBy: z.union([ ProjectTemplateOrderByWithAggregationInputSchema.array(),ProjectTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectTemplateScalarFieldEnumSchema.array(),
  having: ProjectTemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProjectTemplateGroupByArgsSchema;
