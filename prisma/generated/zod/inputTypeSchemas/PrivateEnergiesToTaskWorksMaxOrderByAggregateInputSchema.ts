import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToTaskWorksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksMaxOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  workId: z.lazy(() => SortOrderSchema).optional(),
  startingValue: z.lazy(() => SortOrderSchema).optional(),
  endingValue: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToTaskWorksMaxOrderByAggregateInputSchema;
