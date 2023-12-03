import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsWhereInputSchema'
import { PrivateTagsToProjectsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsOrderByWithRelationInputSchema'
import { PrivateTagsToProjectsWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsWhereUniqueInputSchema'

export const PrivateTagsToProjectsAggregateArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectsAggregateArgs> = z.object({
  where: PrivateTagsToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToProjectsOrderByWithRelationInputSchema.array(),PrivateTagsToProjectsOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagsToProjectsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagsToProjectsAggregateArgsSchema;
