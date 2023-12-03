import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default EnergiesToPrivateTagsScalarWhereWithAggregatesInputSchema;
