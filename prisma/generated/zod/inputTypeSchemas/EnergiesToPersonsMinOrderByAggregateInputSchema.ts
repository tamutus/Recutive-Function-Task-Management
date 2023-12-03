import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToPersonsMinOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToPersonsMinOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToPersonsMinOrderByAggregateInputSchema;
