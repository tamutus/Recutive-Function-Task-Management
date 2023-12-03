import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PriorityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PriorityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PriorityScalarWhereWithAggregatesInputSchema),z.lazy(() => PriorityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PriorityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PriorityScalarWhereWithAggregatesInputSchema),z.lazy(() => PriorityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PriorityScalarWhereWithAggregatesInputSchema;
