import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesWhereInputSchema'
import { PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema'
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesWhereUniqueInputSchema'

export const PrivateTagsToTaskTemplatesAggregateArgsSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesAggregateArgs> = z.object({
  where: PrivateTagsToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema.array(),PrivateTagsToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagsToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagsToTaskTemplatesAggregateArgsSchema;
