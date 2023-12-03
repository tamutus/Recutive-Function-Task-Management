import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksWhereInputSchema } from '../inputTypeSchemas/TagsToTasksWhereInputSchema'
import { TagsToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagsToTasksOrderByWithRelationInputSchema'
import { TagsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/TagsToTasksWhereUniqueInputSchema'

export const TagsToTasksAggregateArgsSchema: z.ZodType<Prisma.TagsToTasksAggregateArgs> = z.object({
  where: TagsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ TagsToTasksOrderByWithRelationInputSchema.array(),TagsToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TagsToTasksAggregateArgsSchema;
