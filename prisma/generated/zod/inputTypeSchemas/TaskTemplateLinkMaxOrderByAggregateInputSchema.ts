import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskTemplateLinkMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TaskTemplateLinkMaxOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  linkType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskTemplateLinkMaxOrderByAggregateInputSchema;
