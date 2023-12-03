import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkWhereInputSchema } from './TaskLinkWhereInputSchema';

export const TaskLinkListRelationFilterSchema: z.ZodType<Prisma.TaskLinkListRelationFilter> = z.object({
  every: z.lazy(() => TaskLinkWhereInputSchema).optional(),
  some: z.lazy(() => TaskLinkWhereInputSchema).optional(),
  none: z.lazy(() => TaskLinkWhereInputSchema).optional()
}).strict();

export default TaskLinkListRelationFilterSchema;
