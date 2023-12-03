import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema;
