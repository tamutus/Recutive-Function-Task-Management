import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergiesToProjectTemplatesCountOrderByAggregateInputSchema } from './EnergiesToProjectTemplatesCountOrderByAggregateInputSchema';
import { EnergiesToProjectTemplatesAvgOrderByAggregateInputSchema } from './EnergiesToProjectTemplatesAvgOrderByAggregateInputSchema';
import { EnergiesToProjectTemplatesMaxOrderByAggregateInputSchema } from './EnergiesToProjectTemplatesMaxOrderByAggregateInputSchema';
import { EnergiesToProjectTemplatesMinOrderByAggregateInputSchema } from './EnergiesToProjectTemplatesMinOrderByAggregateInputSchema';
import { EnergiesToProjectTemplatesSumOrderByAggregateInputSchema } from './EnergiesToProjectTemplatesSumOrderByAggregateInputSchema';

export const EnergiesToProjectTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesOrderByWithAggregationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => EnergiesToProjectTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergiesToProjectTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergiesToProjectTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergiesToProjectTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergiesToProjectTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergiesToProjectTemplatesOrderByWithAggregationInputSchema;
