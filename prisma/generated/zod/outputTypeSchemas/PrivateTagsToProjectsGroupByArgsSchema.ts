import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsWhereInputSchema'
import { PrivateTagsToProjectsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsOrderByWithAggregationInputSchema'
import { PrivateTagsToProjectsScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagsToProjectsScalarFieldEnumSchema'
import { PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema'

export const PrivateTagsToProjectsGroupByArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectsGroupByArgs> = z.object({
  where: PrivateTagsToProjectsWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToProjectsOrderByWithAggregationInputSchema.array(),PrivateTagsToProjectsOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateTagsToProjectsScalarFieldEnumSchema.array(),
  having: PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagsToProjectsGroupByArgsSchema;
