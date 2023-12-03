import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToProjectsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToProjectsMaxOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  volunteerDate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToProjectsMaxOrderByAggregateInputSchema;
