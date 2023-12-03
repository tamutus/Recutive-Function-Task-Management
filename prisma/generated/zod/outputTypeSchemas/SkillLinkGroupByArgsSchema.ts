import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillLinkWhereInputSchema } from '../inputTypeSchemas/SkillLinkWhereInputSchema'
import { SkillLinkOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SkillLinkOrderByWithAggregationInputSchema'
import { SkillLinkScalarFieldEnumSchema } from '../inputTypeSchemas/SkillLinkScalarFieldEnumSchema'
import { SkillLinkScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SkillLinkScalarWhereWithAggregatesInputSchema'

export const SkillLinkGroupByArgsSchema: z.ZodType<Prisma.SkillLinkGroupByArgs> = z.object({
  where: SkillLinkWhereInputSchema.optional(),
  orderBy: z.union([ SkillLinkOrderByWithAggregationInputSchema.array(),SkillLinkOrderByWithAggregationInputSchema ]).optional(),
  by: SkillLinkScalarFieldEnumSchema.array(),
  having: SkillLinkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillLinkGroupByArgsSchema;
