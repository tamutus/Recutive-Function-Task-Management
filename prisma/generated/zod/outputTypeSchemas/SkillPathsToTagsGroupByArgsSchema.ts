import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillPathsToTagsWhereInputSchema'
import { SkillPathsToTagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SkillPathsToTagsOrderByWithAggregationInputSchema'
import { SkillPathsToTagsScalarFieldEnumSchema } from '../inputTypeSchemas/SkillPathsToTagsScalarFieldEnumSchema'
import { SkillPathsToTagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SkillPathsToTagsScalarWhereWithAggregatesInputSchema'

export const SkillPathsToTagsGroupByArgsSchema: z.ZodType<Prisma.SkillPathsToTagsGroupByArgs> = z.object({
  where: SkillPathsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ SkillPathsToTagsOrderByWithAggregationInputSchema.array(),SkillPathsToTagsOrderByWithAggregationInputSchema ]).optional(),
  by: SkillPathsToTagsScalarFieldEnumSchema.array(),
  having: SkillPathsToTagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillPathsToTagsGroupByArgsSchema;
