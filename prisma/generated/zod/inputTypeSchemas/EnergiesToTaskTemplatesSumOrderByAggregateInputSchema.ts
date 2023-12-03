import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToTaskTemplatesSumOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesSumOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesSumOrderByAggregateInputSchema;
