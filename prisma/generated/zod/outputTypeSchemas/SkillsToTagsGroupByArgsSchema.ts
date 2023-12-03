import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillsToTagsWhereInputSchema'
import { SkillsToTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SkillsToTagsOrderByWithAggregationInputSchema'
import { SkillsToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/SkillsToTagsScalarFieldEnumSchema'
import { SkillsToTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SkillsToTagsScalarWhereWithAggregatesInputSchema'

export const SkillsToTagsGroupByArgsSchema: z.ZodType<Prisma.SkillsToTagsGroupByArgs> = z.object({
  where: SkillsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToTagsOrderByWithAggregationInputSchema.array(),SkillsToTagsOrderByWithAggregationInputSchema ]).optional(),
  by: SkillsToTagsScalarFieldEnumSchema.array(),
  having: SkillsToTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillsToTagsGroupByArgsSchema;
