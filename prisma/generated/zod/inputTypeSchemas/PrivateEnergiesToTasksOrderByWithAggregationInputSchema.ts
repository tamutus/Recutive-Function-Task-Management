import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrivateEnergiesToTasksCountOrderByAggregateInputSchema } from './PrivateEnergiesToTasksCountOrderByAggregateInputSchema';
import { PrivateEnergiesToTasksAvgOrderByAggregateInputSchema } from './PrivateEnergiesToTasksAvgOrderByAggregateInputSchema';
import { PrivateEnergiesToTasksMaxOrderByAggregateInputSchema } from './PrivateEnergiesToTasksMaxOrderByAggregateInputSchema';
import { PrivateEnergiesToTasksMinOrderByAggregateInputSchema } from './PrivateEnergiesToTasksMinOrderByAggregateInputSchema';
import { PrivateEnergiesToTasksSumOrderByAggregateInputSchema } from './PrivateEnergiesToTasksSumOrderByAggregateInputSchema';

export const PrivateEnergiesToTasksOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksOrderByWithAggregationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PrivateEnergiesToTasksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateEnergiesToTasksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateEnergiesToTasksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateEnergiesToTasksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateEnergiesToTasksSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateEnergiesToTasksOrderByWithAggregationInputSchema;
