import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergiesToTaskTemplatesCountOrderByAggregateInputSchema } from './EnergiesToTaskTemplatesCountOrderByAggregateInputSchema';
import { EnergiesToTaskTemplatesAvgOrderByAggregateInputSchema } from './EnergiesToTaskTemplatesAvgOrderByAggregateInputSchema';
import { EnergiesToTaskTemplatesMaxOrderByAggregateInputSchema } from './EnergiesToTaskTemplatesMaxOrderByAggregateInputSchema';
import { EnergiesToTaskTemplatesMinOrderByAggregateInputSchema } from './EnergiesToTaskTemplatesMinOrderByAggregateInputSchema';
import { EnergiesToTaskTemplatesSumOrderByAggregateInputSchema } from './EnergiesToTaskTemplatesSumOrderByAggregateInputSchema';

export const EnergiesToTaskTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesOrderByWithAggregationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EnergiesToTaskTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergiesToTaskTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergiesToTaskTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergiesToTaskTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergiesToTaskTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesOrderByWithAggregationInputSchema;
