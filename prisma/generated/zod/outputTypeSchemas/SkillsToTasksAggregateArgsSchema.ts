import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksWhereInputSchema } from '../inputTypeSchemas/SkillsToTasksWhereInputSchema'
import { SkillsToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/SkillsToTasksOrderByWithRelationInputSchema'
import { SkillsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/SkillsToTasksWhereUniqueInputSchema'

export const SkillsToTasksAggregateArgsSchema: z.ZodType<Prisma.SkillsToTasksAggregateArgs> = z.object({
  where: SkillsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToTasksOrderByWithRelationInputSchema.array(),SkillsToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillsToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillsToTasksAggregateArgsSchema;
