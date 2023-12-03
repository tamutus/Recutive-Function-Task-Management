import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesWhereInputSchema'
import { PrivateTagsToTaskTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesOrderByWithAggregationInputSchema'
import { PrivateTagsToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesScalarFieldEnumSchema'
import { PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema'

export const PrivateTagsToTaskTemplatesGroupByArgsSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesGroupByArgs> = z.object({
  where: PrivateTagsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToTaskTemplatesOrderByWithAggregationInputSchema.array(),PrivateTagsToTaskTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateTagsToTaskTemplatesScalarFieldEnumSchema.array(),
  having: PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagsToTaskTemplatesGroupByArgsSchema;
