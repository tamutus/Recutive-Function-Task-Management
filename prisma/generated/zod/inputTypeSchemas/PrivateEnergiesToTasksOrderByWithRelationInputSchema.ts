import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrivateEnergyOrderByWithRelationInputSchema } from './PrivateEnergyOrderByWithRelationInputSchema';
import { TaskOrderByWithRelationInputSchema } from './TaskOrderByWithRelationInputSchema';

export const PrivateEnergiesToTasksOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksOrderByWithRelationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  energy: z.lazy(() => PrivateEnergyOrderByWithRelationInputSchema).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateEnergiesToTasksOrderByWithRelationInputSchema;
