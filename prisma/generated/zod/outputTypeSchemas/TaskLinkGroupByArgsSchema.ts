import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkWhereInputSchema } from '../inputTypeSchemas/TaskLinkWhereInputSchema'
import { TaskLinkOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TaskLinkOrderByWithAggregationInputSchema'
import { TaskLinkScalarFieldEnumSchema } from '../inputTypeSchemas/TaskLinkScalarFieldEnumSchema'
import { TaskLinkScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TaskLinkScalarWhereWithAggregatesInputSchema'

export const TaskLinkGroupByArgsSchema: z.ZodType<Prisma.TaskLinkGroupByArgs> = z.object({
  where: TaskLinkWhereInputSchema.optional(),
  orderBy: z.union([ TaskLinkOrderByWithAggregationInputSchema.array(),TaskLinkOrderByWithAggregationInputSchema ]).optional(),
  by: TaskLinkScalarFieldEnumSchema.array(),
  having: TaskLinkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TaskLinkGroupByArgsSchema;
