import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToPrivateTagsCountOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCountOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToPrivateTagsCountOrderByAggregateInputSchema;
