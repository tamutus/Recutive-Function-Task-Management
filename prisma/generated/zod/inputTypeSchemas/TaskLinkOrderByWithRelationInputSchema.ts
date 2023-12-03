import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskOrderByWithRelationInputSchema } from './TaskOrderByWithRelationInputSchema';

export const TaskLinkOrderByWithRelationInputSchema: z.ZodType<Prisma.TaskLinkOrderByWithRelationInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  linkType: z.lazy(() => SortOrderSchema).optional(),
  precursor: z.lazy(() => TaskOrderByWithRelationInputSchema).optional(),
  successor: z.lazy(() => TaskOrderByWithRelationInputSchema).optional()
}).strict();

export default TaskLinkOrderByWithRelationInputSchema;
