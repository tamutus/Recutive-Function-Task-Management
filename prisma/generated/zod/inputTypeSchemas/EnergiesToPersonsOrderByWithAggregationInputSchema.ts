import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EnergiesToPersonsCountOrderByAggregateInputSchema } from './EnergiesToPersonsCountOrderByAggregateInputSchema';
import { EnergiesToPersonsAvgOrderByAggregateInputSchema } from './EnergiesToPersonsAvgOrderByAggregateInputSchema';
import { EnergiesToPersonsMaxOrderByAggregateInputSchema } from './EnergiesToPersonsMaxOrderByAggregateInputSchema';
import { EnergiesToPersonsMinOrderByAggregateInputSchema } from './EnergiesToPersonsMinOrderByAggregateInputSchema';
import { EnergiesToPersonsSumOrderByAggregateInputSchema } from './EnergiesToPersonsSumOrderByAggregateInputSchema';

export const EnergiesToPersonsOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergiesToPersonsOrderByWithAggregationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EnergiesToPersonsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergiesToPersonsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergiesToPersonsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergiesToPersonsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergiesToPersonsSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergiesToPersonsOrderByWithAggregationInputSchema;
