import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillWhereInputSchema } from '../inputTypeSchemas/SkillWhereInputSchema'
import { SkillOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillOrderByWithRelationInputSchema'
import { SkillWhereUniqueInputSchema } from '../inputTypeSchemas/SkillWhereUniqueInputSchema'

export const SkillAggregateArgsSchema: z.ZodType<Prisma.SkillAggregateArgs> = z.object({
  where: SkillWhereInputSchema.optional(),
  orderBy: z.union([ SkillOrderByWithRelationInputSchema.array(),SkillOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillAggregateArgsSchema;
