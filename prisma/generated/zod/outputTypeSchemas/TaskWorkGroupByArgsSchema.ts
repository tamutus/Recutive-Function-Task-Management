import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkWhereInputSchema } from '../inputTypeSchemas/TaskWorkWhereInputSchema'
import { TaskWorkOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TaskWorkOrderByWithAggregationInputSchema'
import { TaskWorkScalarFieldEnumSchema } from '../inputTypeSchemas/TaskWorkScalarFieldEnumSchema'
import { TaskWorkScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TaskWorkScalarWhereWithAggregatesInputSchema'

export const TaskWorkGroupByArgsSchema: z.ZodType<Prisma.TaskWorkGroupByArgs> = z.object({
  where: TaskWorkWhereInputSchema.optional(),
  orderBy: z.union([ TaskWorkOrderByWithAggregationInputSchema.array(),TaskWorkOrderByWithAggregationInputSchema ]).optional(),
  by: TaskWorkScalarFieldEnumSchema.array(),
  having: TaskWorkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TaskWorkGroupByArgsSchema;
