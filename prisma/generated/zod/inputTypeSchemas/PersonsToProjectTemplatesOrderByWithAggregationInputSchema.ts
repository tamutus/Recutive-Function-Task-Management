import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PersonsToProjectTemplatesCountOrderByAggregateInputSchema } from './PersonsToProjectTemplatesCountOrderByAggregateInputSchema';
import { PersonsToProjectTemplatesAvgOrderByAggregateInputSchema } from './PersonsToProjectTemplatesAvgOrderByAggregateInputSchema';
import { PersonsToProjectTemplatesMaxOrderByAggregateInputSchema } from './PersonsToProjectTemplatesMaxOrderByAggregateInputSchema';
import { PersonsToProjectTemplatesMinOrderByAggregateInputSchema } from './PersonsToProjectTemplatesMinOrderByAggregateInputSchema';
import { PersonsToProjectTemplatesSumOrderByAggregateInputSchema } from './PersonsToProjectTemplatesSumOrderByAggregateInputSchema';

export const PersonsToProjectTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesOrderByWithAggregationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonsToProjectTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PersonsToProjectTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonsToProjectTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonsToProjectTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PersonsToProjectTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default PersonsToProjectTemplatesOrderByWithAggregationInputSchema;
