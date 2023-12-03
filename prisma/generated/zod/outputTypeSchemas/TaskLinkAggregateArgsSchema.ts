import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskLinkWhereInputSchema } from '../inputTypeSchemas/TaskLinkWhereInputSchema'
import { TaskLinkOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskLinkOrderByWithRelationInputSchema'
import { TaskLinkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskLinkWhereUniqueInputSchema'

export const TaskLinkAggregateArgsSchema: z.ZodType<Prisma.TaskLinkAggregateArgs> = z.object({
  where: TaskLinkWhereInputSchema.optional(),
  orderBy: z.union([ TaskLinkOrderByWithRelationInputSchema.array(),TaskLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TaskLinkAggregateArgsSchema;
