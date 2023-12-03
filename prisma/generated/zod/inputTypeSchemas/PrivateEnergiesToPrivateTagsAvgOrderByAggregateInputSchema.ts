import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToPrivateTagsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsAvgOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsAvgOrderByAggregateInputSchema;
