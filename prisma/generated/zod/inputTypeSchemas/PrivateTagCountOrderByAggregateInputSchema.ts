import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateTagCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateTagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional(),
  nsfw: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateTagCountOrderByAggregateInputSchema;
