import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateWhereInputSchema } from '../inputTypeSchemas/TaskTemplateWhereInputSchema'
import { TaskTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TaskTemplateOrderByWithAggregationInputSchema'
import { TaskTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/TaskTemplateScalarFieldEnumSchema'
import { TaskTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TaskTemplateScalarWhereWithAggregatesInputSchema'

export const TaskTemplateGroupByArgsSchema: z.ZodType<Prisma.TaskTemplateGroupByArgs> = z.object({
  where: TaskTemplateWhereInputSchema.optional(),
  orderBy: z.union([ TaskTemplateOrderByWithAggregationInputSchema.array(),TaskTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: TaskTemplateScalarFieldEnumSchema.array(),
  having: TaskTemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TaskTemplateGroupByArgsSchema;
