import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateNullableRelationFilterSchema: z.ZodType<Prisma.TaskTemplateNullableRelationFilter> = z.object({
  is: z.lazy(() => TaskTemplateWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TaskTemplateWhereInputSchema).optional().nullable()
}).strict();

export default TaskTemplateNullableRelationFilterSchema;
