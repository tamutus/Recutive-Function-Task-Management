import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToPersonsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToPersonsAvgOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToPersonsAvgOrderByAggregateInputSchema;
