import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskTemplateLinkWhereInputSchema } from '../inputTypeSchemas/TaskTemplateLinkWhereInputSchema'
import { TaskTemplateLinkOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskTemplateLinkOrderByWithRelationInputSchema'
import { TaskTemplateLinkWhereUniqueInputSchema } from '../inputTypeSchemas/TaskTemplateLinkWhereUniqueInputSchema'

export const TaskTemplateLinkAggregateArgsSchema: z.ZodType<Prisma.TaskTemplateLinkAggregateArgs> = z.object({
  where: TaskTemplateLinkWhereInputSchema.optional(),
  orderBy: z.union([ TaskTemplateLinkOrderByWithRelationInputSchema.array(),TaskTemplateLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskTemplateLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TaskTemplateLinkAggregateArgsSchema;
