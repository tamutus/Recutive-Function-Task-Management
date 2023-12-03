import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToProjectTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesMinOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToProjectTemplatesMinOrderByAggregateInputSchema;
