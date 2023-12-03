import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateEnergiesToTaskWorksCountOrderByAggregateInputSchema } from './PrivateEnergiesToTaskWorksCountOrderByAggregateInputSchema';
import { PrivateEnergiesToTaskWorksAvgOrderByAggregateInputSchema } from './PrivateEnergiesToTaskWorksAvgOrderByAggregateInputSchema';
import { PrivateEnergiesToTaskWorksMaxOrderByAggregateInputSchema } from './PrivateEnergiesToTaskWorksMaxOrderByAggregateInputSchema';
import { PrivateEnergiesToTaskWorksMinOrderByAggregateInputSchema } from './PrivateEnergiesToTaskWorksMinOrderByAggregateInputSchema';
import { PrivateEnergiesToTaskWorksSumOrderByAggregateInputSchema } from './PrivateEnergiesToTaskWorksSumOrderByAggregateInputSchema';

export const PrivateEnergiesToTaskWorksOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksOrderByWithAggregationInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  workId: z.lazy(() => SortOrderSchema).optional(),
  startingValue: z.lazy(() => SortOrderSchema).optional(),
  endingValue: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateEnergiesToTaskWorksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateEnergiesToTaskWorksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateEnergiesToTaskWorksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateEnergiesToTaskWorksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateEnergiesToTaskWorksSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskWorksOrderByWithAggregationInputSchema;
