import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksWhereInputSchema } from '../inputTypeSchemas/TagsToTasksWhereInputSchema'
import { TagsToTasksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TagsToTasksOrderByWithAggregationInputSchema'
import { TagsToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/TagsToTasksScalarFieldEnumSchema'
import { TagsToTasksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TagsToTasksScalarWhereWithAggregatesInputSchema'

export const TagsToTasksGroupByArgsSchema: z.ZodType<Prisma.TagsToTasksGroupByArgs> = z.object({
  where: TagsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ TagsToTasksOrderByWithAggregationInputSchema.array(),TagsToTasksOrderByWithAggregationInputSchema ]).optional(),
  by: TagsToTasksScalarFieldEnumSchema.array(),
  having: TagsToTasksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TagsToTasksGroupByArgsSchema;
