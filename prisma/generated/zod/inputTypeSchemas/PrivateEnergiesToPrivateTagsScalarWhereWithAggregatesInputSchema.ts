import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema;
