import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema;
