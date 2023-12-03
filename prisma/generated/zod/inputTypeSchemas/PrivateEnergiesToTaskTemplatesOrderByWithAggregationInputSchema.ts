import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateEnergiesToTaskTemplatesCountOrderByAggregateInputSchema } from './PrivateEnergiesToTaskTemplatesCountOrderByAggregateInputSchema';
import { PrivateEnergiesToTaskTemplatesAvgOrderByAggregateInputSchema } from './PrivateEnergiesToTaskTemplatesAvgOrderByAggregateInputSchema';
import { PrivateEnergiesToTaskTemplatesMaxOrderByAggregateInputSchema } from './PrivateEnergiesToTaskTemplatesMaxOrderByAggregateInputSchema';
import { PrivateEnergiesToTaskTemplatesMinOrderByAggregateInputSchema } from './PrivateEnergiesToTaskTemplatesMinOrderByAggregateInputSchema';
import { PrivateEnergiesToTaskTemplatesSumOrderByAggregateInputSchema } from './PrivateEnergiesToTaskTemplatesSumOrderByAggregateInputSchema';

export const PrivateEnergiesToTaskTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesOrderByWithAggregationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateEnergiesToTaskTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateEnergiesToTaskTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateEnergiesToTaskTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateEnergiesToTaskTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateEnergiesToTaskTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesOrderByWithAggregationInputSchema;
