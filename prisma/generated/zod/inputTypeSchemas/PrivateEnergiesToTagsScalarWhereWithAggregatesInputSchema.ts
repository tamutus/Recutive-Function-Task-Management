import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateEnergiesToTagsScalarWhereWithAggregatesInputSchema;
