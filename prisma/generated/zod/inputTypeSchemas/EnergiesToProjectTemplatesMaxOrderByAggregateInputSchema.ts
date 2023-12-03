import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToProjectTemplatesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesMaxOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToProjectTemplatesMaxOrderByAggregateInputSchema;
