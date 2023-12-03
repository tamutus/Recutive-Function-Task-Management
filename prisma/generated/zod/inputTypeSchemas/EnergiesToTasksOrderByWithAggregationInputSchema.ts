import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergiesToTasksCountOrderByAggregateInputSchema } from './EnergiesToTasksCountOrderByAggregateInputSchema';
import { EnergiesToTasksAvgOrderByAggregateInputSchema } from './EnergiesToTasksAvgOrderByAggregateInputSchema';
import { EnergiesToTasksMaxOrderByAggregateInputSchema } from './EnergiesToTasksMaxOrderByAggregateInputSchema';
import { EnergiesToTasksMinOrderByAggregateInputSchema } from './EnergiesToTasksMinOrderByAggregateInputSchema';
import { EnergiesToTasksSumOrderByAggregateInputSchema } from './EnergiesToTasksSumOrderByAggregateInputSchema';

export const EnergiesToTasksOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergiesToTasksOrderByWithAggregationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => EnergiesToTasksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergiesToTasksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergiesToTasksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergiesToTasksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergiesToTasksSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergiesToTasksOrderByWithAggregationInputSchema;
