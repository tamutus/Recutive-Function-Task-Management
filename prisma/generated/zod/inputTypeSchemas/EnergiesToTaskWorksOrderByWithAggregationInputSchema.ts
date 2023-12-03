import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EnergiesToTaskWorksCountOrderByAggregateInputSchema } from './EnergiesToTaskWorksCountOrderByAggregateInputSchema';
import { EnergiesToTaskWorksAvgOrderByAggregateInputSchema } from './EnergiesToTaskWorksAvgOrderByAggregateInputSchema';
import { EnergiesToTaskWorksMaxOrderByAggregateInputSchema } from './EnergiesToTaskWorksMaxOrderByAggregateInputSchema';
import { EnergiesToTaskWorksMinOrderByAggregateInputSchema } from './EnergiesToTaskWorksMinOrderByAggregateInputSchema';
import { EnergiesToTaskWorksSumOrderByAggregateInputSchema } from './EnergiesToTaskWorksSumOrderByAggregateInputSchema';

export const EnergiesToTaskWorksOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksOrderByWithAggregationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  workId: z.lazy(() => SortOrderSchema).optional(),
  startingValue: z.lazy(() => SortOrderSchema).optional(),
  endingValue: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EnergiesToTaskWorksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergiesToTaskWorksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergiesToTaskWorksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergiesToTaskWorksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergiesToTaskWorksSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergiesToTaskWorksOrderByWithAggregationInputSchema;
