import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergyOrderByWithRelationInputSchema } from './EnergyOrderByWithRelationInputSchema';
import { TaskOrderByWithRelationInputSchema } from './TaskOrderByWithRelationInputSchema';

export const EnergiesToTasksOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergiesToTasksOrderByWithRelationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  energy: z.lazy(() => EnergyOrderByWithRelationInputSchema).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputSchema).optional()
}).strict();

export default EnergiesToTasksOrderByWithRelationInputSchema;
