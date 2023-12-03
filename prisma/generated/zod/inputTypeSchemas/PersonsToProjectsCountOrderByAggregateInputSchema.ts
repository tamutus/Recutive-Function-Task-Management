import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToProjectsCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToProjectsCountOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  volunteerDate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToProjectsCountOrderByAggregateInputSchema;