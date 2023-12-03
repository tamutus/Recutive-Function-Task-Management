import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PersonsToProjectsCountOrderByAggregateInputSchema } from './PersonsToProjectsCountOrderByAggregateInputSchema';
import { PersonsToProjectsAvgOrderByAggregateInputSchema } from './PersonsToProjectsAvgOrderByAggregateInputSchema';
import { PersonsToProjectsMaxOrderByAggregateInputSchema } from './PersonsToProjectsMaxOrderByAggregateInputSchema';
import { PersonsToProjectsMinOrderByAggregateInputSchema } from './PersonsToProjectsMinOrderByAggregateInputSchema';
import { PersonsToProjectsSumOrderByAggregateInputSchema } from './PersonsToProjectsSumOrderByAggregateInputSchema';

export const PersonsToProjectsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonsToProjectsOrderByWithAggregationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  volunteerDate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonsToProjectsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PersonsToProjectsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonsToProjectsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonsToProjectsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PersonsToProjectsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PersonsToProjectsOrderByWithAggregationInputSchema;
