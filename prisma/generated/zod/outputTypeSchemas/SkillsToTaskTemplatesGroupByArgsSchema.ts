import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesWhereInputSchema'
import { SkillsToTaskTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesOrderByWithAggregationInputSchema'
import { SkillsToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesScalarFieldEnumSchema'
import { SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema'

export const SkillsToTaskTemplatesGroupByArgsSchema: z.ZodType<Prisma.SkillsToTaskTemplatesGroupByArgs> = z.object({
  where: SkillsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToTaskTemplatesOrderByWithAggregationInputSchema.array(),SkillsToTaskTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: SkillsToTaskTemplatesScalarFieldEnumSchema.array(),
  having: SkillsToTaskTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillsToTaskTemplatesGroupByArgsSchema;
