import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathWhereInputSchema } from '../inputTypeSchemas/SkillPathWhereInputSchema'
import { SkillPathOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SkillPathOrderByWithAggregationInputSchema'
import { SkillPathScalarFieldEnumSchema } from '../inputTypeSchemas/SkillPathScalarFieldEnumSchema'
import { SkillPathScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SkillPathScalarWhereWithAggregatesInputSchema'

export const SkillPathGroupByArgsSchema: z.ZodType<Prisma.SkillPathGroupByArgs> = z.object({
  where: SkillPathWhereInputSchema.optional(),
  orderBy: z.union([ SkillPathOrderByWithAggregationInputSchema.array(),SkillPathOrderByWithAggregationInputSchema ]).optional(),
  by: SkillPathScalarFieldEnumSchema.array(),
  having: SkillPathScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillPathGroupByArgsSchema;
