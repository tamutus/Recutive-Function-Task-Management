import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToPrivateTagsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsMaxOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToPrivateTagsMaxOrderByAggregateInputSchema;
