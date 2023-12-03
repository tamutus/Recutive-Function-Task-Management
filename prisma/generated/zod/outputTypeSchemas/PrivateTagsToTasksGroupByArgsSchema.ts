import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksWhereInputSchema'
import { PrivateTagsToTasksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksOrderByWithAggregationInputSchema'
import { PrivateTagsToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/PrivateTagsToTasksScalarFieldEnumSchema'
import { PrivateTagsToTasksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksScalarWhereWithAggregatesInputSchema'

export const PrivateTagsToTasksGroupByArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksGroupByArgs> = z.object({
  where: PrivateTagsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToTasksOrderByWithAggregationInputSchema.array(),PrivateTagsToTasksOrderByWithAggregationInputSchema ]).optional(),
  by: PrivateTagsToTasksScalarFieldEnumSchema.array(),
  having: PrivateTagsToTasksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagsToTasksGroupByArgsSchema;
