import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToPrivateTagsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsSumOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsSumOrderByAggregateInputSchema;
