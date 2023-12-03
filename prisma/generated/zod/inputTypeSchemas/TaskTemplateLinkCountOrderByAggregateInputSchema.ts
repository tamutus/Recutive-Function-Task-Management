import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TaskTemplateLinkCountOrderByAggregateInputSchema: z.ZodType<Prisma.TaskTemplateLinkCountOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  linkType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskTemplateLinkCountOrderByAggregateInputSchema;
