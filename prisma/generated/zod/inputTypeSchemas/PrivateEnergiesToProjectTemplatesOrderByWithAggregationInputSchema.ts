import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateEnergiesToProjectTemplatesCountOrderByAggregateInputSchema } from './PrivateEnergiesToProjectTemplatesCountOrderByAggregateInputSchema';
import { PrivateEnergiesToProjectTemplatesAvgOrderByAggregateInputSchema } from './PrivateEnergiesToProjectTemplatesAvgOrderByAggregateInputSchema';
import { PrivateEnergiesToProjectTemplatesMaxOrderByAggregateInputSchema } from './PrivateEnergiesToProjectTemplatesMaxOrderByAggregateInputSchema';
import { PrivateEnergiesToProjectTemplatesMinOrderByAggregateInputSchema } from './PrivateEnergiesToProjectTemplatesMinOrderByAggregateInputSchema';
import { PrivateEnergiesToProjectTemplatesSumOrderByAggregateInputSchema } from './PrivateEnergiesToProjectTemplatesSumOrderByAggregateInputSchema';

export const PrivateEnergiesToProjectTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesOrderByWithAggregationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrivateEnergiesToProjectTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateEnergiesToProjectTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateEnergiesToProjectTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateEnergiesToProjectTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateEnergiesToProjectTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesOrderByWithAggregationInputSchema;
