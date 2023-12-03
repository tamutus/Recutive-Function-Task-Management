import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToProjectTemplatesCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCountOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesCountOrderByAggregateInputSchema;
