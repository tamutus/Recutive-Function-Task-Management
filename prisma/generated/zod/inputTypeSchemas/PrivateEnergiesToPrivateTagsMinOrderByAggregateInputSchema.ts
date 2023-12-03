import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToPrivateTagsMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsMinOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsMinOrderByAggregateInputSchema;