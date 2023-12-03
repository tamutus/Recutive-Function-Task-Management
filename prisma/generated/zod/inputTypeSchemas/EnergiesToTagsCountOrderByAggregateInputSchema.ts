import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTagsCountOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToTagsCountOrderByAggregateInput> = z.object({
  energyId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTagsCountOrderByAggregateInputSchema;
