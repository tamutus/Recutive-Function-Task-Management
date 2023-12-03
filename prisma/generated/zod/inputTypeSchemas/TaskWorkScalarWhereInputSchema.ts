import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const TaskWorkScalarWhereInputSchema: z.ZodType<Prisma.TaskWorkScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TaskWorkScalarWhereInputSchema),z.lazy(() => TaskWorkScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskWorkScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskWorkScalarWhereInputSchema),z.lazy(() => TaskWorkScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  startedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default TaskWorkScalarWhereInputSchema;
