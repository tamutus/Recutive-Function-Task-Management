import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PriorityOrderByWithRelationInputSchema } from './PriorityOrderByWithRelationInputSchema';
import { TaskOrderByWithRelationInputSchema } from './TaskOrderByWithRelationInputSchema';

export const PrioritiesToTasksOrderByWithRelationInputSchema: z.ZodType<Prisma.PrioritiesToTasksOrderByWithRelationInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  priority: z.lazy(() => PriorityOrderByWithRelationInputSchema).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputSchema).optional()
}).strict();

export default PrioritiesToTasksOrderByWithRelationInputSchema;
