import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TaskOrderByWithRelationInputSchema } from './TaskOrderByWithRelationInputSchema';
import { EnergiesToTaskWorksOrderByRelationAggregateInputSchema } from './EnergiesToTaskWorksOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToTaskWorksOrderByRelationAggregateInputSchema } from './PrivateEnergiesToTaskWorksOrderByRelationAggregateInputSchema';

export const TaskWorkOrderByWithRelationInputSchema: z.ZodType<Prisma.TaskWorkOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  startedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  endedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputSchema).optional(),
  energyChanges: z.lazy(() => EnergiesToTaskWorksOrderByRelationAggregateInputSchema).optional(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TaskWorkOrderByWithRelationInputSchema;
