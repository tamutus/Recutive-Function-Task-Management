import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrivateEnergiesToProjectsCountOrderByAggregateInputSchema } from './PrivateEnergiesToProjectsCountOrderByAggregateInputSchema';
import { PrivateEnergiesToProjectsAvgOrderByAggregateInputSchema } from './PrivateEnergiesToProjectsAvgOrderByAggregateInputSchema';
import { PrivateEnergiesToProjectsMaxOrderByAggregateInputSchema } from './PrivateEnergiesToProjectsMaxOrderByAggregateInputSchema';
import { PrivateEnergiesToProjectsMinOrderByAggregateInputSchema } from './PrivateEnergiesToProjectsMinOrderByAggregateInputSchema';
import { PrivateEnergiesToProjectsSumOrderByAggregateInputSchema } from './PrivateEnergiesToProjectsSumOrderByAggregateInputSchema';

export const PrivateEnergiesToProjectsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsOrderByWithAggregationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PrivateEnergiesToProjectsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateEnergiesToProjectsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateEnergiesToProjectsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateEnergiesToProjectsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateEnergiesToProjectsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectsOrderByWithAggregationInputSchema;
