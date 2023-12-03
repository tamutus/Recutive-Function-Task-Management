import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWorkWhereInputSchema } from '../inputTypeSchemas/TaskWorkWhereInputSchema'
import { TaskWorkOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskWorkOrderByWithRelationInputSchema'
import { TaskWorkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskWorkWhereUniqueInputSchema'

export const TaskWorkAggregateArgsSchema: z.ZodType<Prisma.TaskWorkAggregateArgs> = z.object({
  where: TaskWorkWhereInputSchema.optional(),
  orderBy: z.union([ TaskWorkOrderByWithRelationInputSchema.array(),TaskWorkOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskWorkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TaskWorkAggregateArgsSchema;
