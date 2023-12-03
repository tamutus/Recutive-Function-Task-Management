import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToProjectTemplatesCountOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCountOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToProjectTemplatesCountOrderByAggregateInputSchema;
