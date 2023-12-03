import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillLinkWhereInputSchema } from '../inputTypeSchemas/SkillLinkWhereInputSchema'
import { SkillLinkOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillLinkOrderByWithRelationInputSchema'
import { SkillLinkWhereUniqueInputSchema } from '../inputTypeSchemas/SkillLinkWhereUniqueInputSchema'

export const SkillLinkAggregateArgsSchema: z.ZodType<Prisma.SkillLinkAggregateArgs> = z.object({
  where: SkillLinkWhereInputSchema.optional(),
  orderBy: z.union([ SkillLinkOrderByWithRelationInputSchema.array(),SkillLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillLinkAggregateArgsSchema;
