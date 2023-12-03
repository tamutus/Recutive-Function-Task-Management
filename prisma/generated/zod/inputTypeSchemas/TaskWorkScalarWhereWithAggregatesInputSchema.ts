import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const TaskWorkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TaskWorkScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TaskWorkScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskWorkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskWorkScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskWorkScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskWorkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  startedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  endedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default TaskWorkScalarWhereWithAggregatesInputSchema;
