import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathsToTagsWhereInputSchema } from '../inputTypeSchemas/SkillPathsToTagsWhereInputSchema'
import { SkillPathsToTagsOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillPathsToTagsOrderByWithRelationInputSchema'
import { SkillPathsToTagsWhereUniqueInputSchema } from '../inputTypeSchemas/SkillPathsToTagsWhereUniqueInputSchema'

export const SkillPathsToTagsAggregateArgsSchema: z.ZodType<Prisma.SkillPathsToTagsAggregateArgs> = z.object({
  where: SkillPathsToTagsWhereInputSchema.optional(),
  orderBy: z.union([ SkillPathsToTagsOrderByWithRelationInputSchema.array(),SkillPathsToTagsOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillPathsToTagsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillPathsToTagsAggregateArgsSchema;
