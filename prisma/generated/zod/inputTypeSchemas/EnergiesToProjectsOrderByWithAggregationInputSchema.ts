import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergiesToProjectsCountOrderByAggregateInputSchema } from './EnergiesToProjectsCountOrderByAggregateInputSchema';
import { EnergiesToProjectsAvgOrderByAggregateInputSchema } from './EnergiesToProjectsAvgOrderByAggregateInputSchema';
import { EnergiesToProjectsMaxOrderByAggregateInputSchema } from './EnergiesToProjectsMaxOrderByAggregateInputSchema';
import { EnergiesToProjectsMinOrderByAggregateInputSchema } from './EnergiesToProjectsMinOrderByAggregateInputSchema';
import { EnergiesToProjectsSumOrderByAggregateInputSchema } from './EnergiesToProjectsSumOrderByAggregateInputSchema';

export const EnergiesToProjectsOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergiesToProjectsOrderByWithAggregationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EnergiesToProjectsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergiesToProjectsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergiesToProjectsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergiesToProjectsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergiesToProjectsSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergiesToProjectsOrderByWithAggregationInputSchema;
