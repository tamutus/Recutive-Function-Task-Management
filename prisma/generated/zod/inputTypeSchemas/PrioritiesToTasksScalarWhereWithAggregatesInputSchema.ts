import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PrioritiesToTasksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrioritiesToTasksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToTasksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToTasksScalarWhereWithAggregatesInputSchema;
