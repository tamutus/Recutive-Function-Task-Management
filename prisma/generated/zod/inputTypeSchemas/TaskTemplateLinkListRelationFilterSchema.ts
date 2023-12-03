import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkWhereInputSchema } from './TaskTemplateLinkWhereInputSchema';

export const TaskTemplateLinkListRelationFilterSchema: z.ZodType<Prisma.TaskTemplateLinkListRelationFilter> = z.object({
  every: z.lazy(() => TaskTemplateLinkWhereInputSchema).optional(),
  some: z.lazy(() => TaskTemplateLinkWhereInputSchema).optional(),
  none: z.lazy(() => TaskTemplateLinkWhereInputSchema).optional()
}).strict();

export default TaskTemplateLinkListRelationFilterSchema;
