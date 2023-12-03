import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToSkillPathsWhereInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsWhereInputSchema'
import { SkillsToSkillPathsOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsOrderByWithRelationInputSchema'
import { SkillsToSkillPathsWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToSkillPathsWhereUniqueInputSchema'

export const SkillsToSkillPathsAggregateArgsSchema: z.ZodType<Prisma.SkillsToSkillPathsAggregateArgs> = z.object({
  where: SkillsToSkillPathsWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToSkillPathsOrderByWithRelationInputSchema.array(),SkillsToSkillPathsOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillsToSkillPathsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillsToSkillPathsAggregateArgsSchema;
