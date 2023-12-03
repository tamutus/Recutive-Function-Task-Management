import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskTemplateLinkMinOrderByAggregateInputSchema: z.ZodType<Prisma.TaskTemplateLinkMinOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  linkType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskTemplateLinkMinOrderByAggregateInputSchema;
