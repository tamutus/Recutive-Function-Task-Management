import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathWhereInputSchema } from '../inputTypeSchemas/SkillPathWhereInputSchema'
import { SkillPathOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillPathOrderByWithRelationInputSchema'
import { SkillPathWhereUniqueInputSchema } from '../inputTypeSchemas/SkillPathWhereUniqueInputSchema'

export const SkillPathAggregateArgsSchema: z.ZodType<Prisma.SkillPathAggregateArgs> = z.object({
  where: SkillPathWhereInputSchema.optional(),
  orderBy: z.union([ SkillPathOrderByWithRelationInputSchema.array(),SkillPathOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillPathWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillPathAggregateArgsSchema;
