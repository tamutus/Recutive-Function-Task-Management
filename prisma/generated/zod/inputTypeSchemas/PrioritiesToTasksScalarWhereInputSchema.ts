import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PrioritiesToTasksScalarWhereInputSchema: z.ZodType<Prisma.PrioritiesToTasksScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToTasksScalarWhereInputSchema),z.lazy(() => PrioritiesToTasksScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToTasksScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToTasksScalarWhereInputSchema),z.lazy(() => PrioritiesToTasksScalarWhereInputSchema).array() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToTasksScalarWhereInputSchema;
