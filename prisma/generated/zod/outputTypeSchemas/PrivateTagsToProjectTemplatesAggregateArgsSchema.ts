import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesWhereInputSchema'
import { PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema'
import { PrivateTagsToProjectTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesWhereUniqueInputSchema'

export const PrivateTagsToProjectTemplatesAggregateArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesAggregateArgs> = z.object({
  where: PrivateTagsToProjectTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema.array(),PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagsToProjectTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagsToProjectTemplatesAggregateArgsSchema;
