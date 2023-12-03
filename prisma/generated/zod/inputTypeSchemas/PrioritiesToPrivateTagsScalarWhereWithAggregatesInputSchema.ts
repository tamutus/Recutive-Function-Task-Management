import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToPrivateTagsScalarWhereWithAggregatesInputSchema;
