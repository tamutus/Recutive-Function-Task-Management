import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PersonsToTaskTemplatesScalarWhereInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PersonsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PersonsToTaskTemplatesScalarWhereInputSchema;
