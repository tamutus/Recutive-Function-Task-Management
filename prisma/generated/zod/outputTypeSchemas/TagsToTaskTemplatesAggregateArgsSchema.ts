import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesWhereInputSchema'
import { TagsToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesOrderByWithRelationInputSchema'
import { TagsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesWhereUniqueInputSchema'

export const TagsToTaskTemplatesAggregateArgsSchema: z.ZodType<Prisma.TagsToTaskTemplatesAggregateArgs> = z.object({
  where: TagsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ TagsToTaskTemplatesOrderByWithRelationInputSchema.array(),TagsToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TagsToTaskTemplatesAggregateArgsSchema;
