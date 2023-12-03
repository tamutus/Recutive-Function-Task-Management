import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesWhereInputSchema'
import { PrivateTagsToProjectTemplatesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesOrderByWithAggregationInputSchema'
import { PrivateTagsToProjectTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesScalarFieldEnumSchema'
import { PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema'

export const PrivateTagsToProjectTemplatesGroupByArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesGroupByArgs> = z.object({
  where: PrivateTagsToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToProjectTemplatesOrderByWithAggregationInputSchema.array(),PrivateTagsToProjectTemplatesOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateTagsToProjectTemplatesScalarFieldEnumSchema.array(),
  having: PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagsToProjectTemplatesGroupByArgsSchema;
