import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToProjectTemplatesCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCountOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToProjectTemplatesCountOrderByAggregateInputSchema;
