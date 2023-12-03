import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksWhereInputSchema'
import { PrivateTagsToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksOrderByWithRelationInputSchema'
import { PrivateTagsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksWhereUniqueInputSchema'

export const PrivateTagsToTasksAggregateArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksAggregateArgs> = z.object({
  where: PrivateTagsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ PrivateTagsToTasksOrderByWithRelationInputSchema.array(),PrivateTagsToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: PrivateTagsToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PrivateTagsToTasksAggregateArgsSchema;
