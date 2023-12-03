import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesWhereInputSchema'
import { TagsToTaskTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesOrderByWithAggregationInputSchema'
import { TagsToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/TagsToTaskTemplatesScalarFieldEnumSchema'
import { TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema'

export const TagsToTaskTemplatesGroupByArgsSchema: z.ZodType<Prisma.TagsToTaskTemplatesGroupByArgs> = z.object({
  where: TagsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ TagsToTaskTemplatesOrderByWithAggregationInputSchema.array(),TagsToTaskTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: TagsToTaskTemplatesScalarFieldEnumSchema.array(),
  having: TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TagsToTaskTemplatesGroupByArgsSchema;
