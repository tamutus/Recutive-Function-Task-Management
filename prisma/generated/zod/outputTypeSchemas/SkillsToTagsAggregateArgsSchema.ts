import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillsToTagsWhereInputSchema'
import { SkillsToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillsToTagsOrderByWithRelationInputSchema'
import { SkillsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTagsWhereUniqueInputSchema'

export const SkillsToTagsAggregateArgsSchema: z.ZodType<Prisma.SkillsToTagsAggregateArgs> = z.object({
  where: SkillsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToTagsOrderByWithRelationInputSchema.array(),SkillsToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillsToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillsToTagsAggregateArgsSchema;
