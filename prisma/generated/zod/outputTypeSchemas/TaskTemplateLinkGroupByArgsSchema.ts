import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkWhereInputSchema } from '../inputTypeSchemas/TaskTemplateLinkWhereInputSchema'
import { TaskTemplateLinkOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TaskTemplateLinkOrderByWithAggregationInputSchema'
import { TaskTemplateLinkScalarFieldEnumSchema } from '../inputTypeSchemas/TaskTemplateLinkScalarFieldEnumSchema'
import { TaskTemplateLinkScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TaskTemplateLinkScalarWhereWithAggregatesInputSchema'

export const TaskTemplateLinkGroupByArgsSchema: z.ZodType<Prisma.TaskTemplateLinkGroupByArgs> = z.object({
  where: TaskTemplateLinkWhereInputSchema.optional(),
  orderBy: z.union([ TaskTemplateLinkOrderByWithAggregationInputSchema.array(),TaskTemplateLinkOrderByWithAggregationInputSchema ]).optional(),
  by: TaskTemplateLinkScalarFieldEnumSchema.array(),
  having: TaskTemplateLinkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TaskTemplateLinkGroupByArgsSchema;
