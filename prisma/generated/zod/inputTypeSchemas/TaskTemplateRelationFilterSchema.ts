import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateRelationFilterSchema: z.ZodType<Prisma.TaskTemplateRelationFilter> = z.object({
  is: z.lazy(() => TaskTemplateWhereInputSchema).optional(),
  isNot: z.lazy(() => TaskTemplateWhereInputSchema).optional()
}).strict();

export default TaskTemplateRelationFilterSchema;
