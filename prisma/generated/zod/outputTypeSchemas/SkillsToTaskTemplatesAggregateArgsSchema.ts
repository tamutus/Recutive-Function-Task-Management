import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesWhereInputSchema'
import { SkillsToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesOrderByWithRelationInputSchema'
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTaskTemplatesWhereUniqueInputSchema'

export const SkillsToTaskTemplatesAggregateArgsSchema: z.ZodType<Prisma.SkillsToTaskTemplatesAggregateArgs> = z.object({
  where: SkillsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToTaskTemplatesOrderByWithRelationInputSchema.array(),SkillsToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillsToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillsToTaskTemplatesAggregateArgsSchema;
