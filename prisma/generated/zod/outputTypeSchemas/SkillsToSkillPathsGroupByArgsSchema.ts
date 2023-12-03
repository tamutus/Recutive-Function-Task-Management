import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsWhereInputSchema'
import { SkillsToSkillPathsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsOrderByWithAggregationInputSchema'
import { SkillsToSkillPathsScalarFieldEnumSchema } from '../inputTypeSchemas/SkillsToSkillPathsScalarFieldEnumSchema'
import { SkillsToSkillPathsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsScalarWhereWithAggregatesInputSchema'

export const SkillsToSkillPathsGroupByArgsSchema: z.ZodType<Prisma.SkillsToSkillPathsGroupByArgs> = z.object({
  where: SkillsToSkillPathsWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToSkillPathsOrderByWithAggregationInputSchema.array(),SkillsToSkillPathsOrderByWithAggregationInputSchema ]).optional(),
  by: SkillsToSkillPathsScalarFieldEnumSchema.array(),
  having: SkillsToSkillPathsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillsToSkillPathsGroupByArgsSchema;
