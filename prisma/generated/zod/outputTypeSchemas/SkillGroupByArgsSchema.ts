import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillWhereInputSchema } from '../inputTypeSchemas/SkillWhereInputSchema'
import { SkillOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SkillOrderByWithAggregationInputSchema'
import { SkillScalarFieldEnumSchema } from '../inputTypeSchemas/SkillScalarFieldEnumSchema'
import { SkillScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SkillScalarWhereWithAggregatesInputSchema'

export const SkillGroupByArgsSchema: z.ZodType<Prisma.SkillGroupByArgs> = z.object({
  where: SkillWhereInputSchema.optional(),
  orderBy: z.union([ SkillOrderByWithAggregationInputSchema.array(),SkillOrderByWithAggregationInputSchema ]).optional(),
  by: SkillScalarFieldEnumSchema.array(),
  having: SkillScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillGroupByArgsSchema;
