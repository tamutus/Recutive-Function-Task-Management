import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToTasksWhereInputSchema } from '../inputTypeSchemas/SkillsToTasksWhereInputSchema'
import { SkillsToTasksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SkillsToTasksOrderByWithAggregationInputSchema'
import { SkillsToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/SkillsToTasksScalarFieldEnumSchema'
import { SkillsToTasksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SkillsToTasksScalarWhereWithAggregatesInputSchema'

export const SkillsToTasksGroupByArgsSchema: z.ZodType<Prisma.SkillsToTasksGroupByArgs> = z.object({
  where: SkillsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ SkillsToTasksOrderByWithAggregationInputSchema.array(),SkillsToTasksOrderByWithAggregationInputSchema ]).optional(),
  by: SkillsToTasksScalarFieldEnumSchema.array(),
  having: SkillsToTasksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SkillsToTasksGroupByArgsSchema;
