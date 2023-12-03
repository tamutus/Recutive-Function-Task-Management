import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateWhereInputSchema } from '../inputTypeSchemas/TaskTemplateWhereInputSchema'
import { TaskTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskTemplateOrderByWithRelationInputSchema'
import { TaskTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/TaskTemplateWhereUniqueInputSchema'

export const TaskTemplateAggregateArgsSchema: z.ZodType<Prisma.TaskTemplateAggregateArgs> = z.object({
  where: TaskTemplateWhereInputSchema.optional(),
  orderBy: z.union([ TaskTemplateOrderByWithRelationInputSchema.array(),TaskTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TaskTemplateAggregateArgsSchema;
