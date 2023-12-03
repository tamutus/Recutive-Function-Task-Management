import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PersonsToTaskTemplatesCountOrderByAggregateInputSchema } from './PersonsToTaskTemplatesCountOrderByAggregateInputSchema';
import { PersonsToTaskTemplatesAvgOrderByAggregateInputSchema } from './PersonsToTaskTemplatesAvgOrderByAggregateInputSchema';
import { PersonsToTaskTemplatesMaxOrderByAggregateInputSchema } from './PersonsToTaskTemplatesMaxOrderByAggregateInputSchema';
import { PersonsToTaskTemplatesMinOrderByAggregateInputSchema } from './PersonsToTaskTemplatesMinOrderByAggregateInputSchema';
import { PersonsToTaskTemplatesSumOrderByAggregateInputSchema } from './PersonsToTaskTemplatesSumOrderByAggregateInputSchema';

export const PersonsToTaskTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesOrderByWithAggregationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonsToTaskTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PersonsToTaskTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonsToTaskTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonsToTaskTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PersonsToTaskTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default PersonsToTaskTemplatesOrderByWithAggregationInputSchema;
