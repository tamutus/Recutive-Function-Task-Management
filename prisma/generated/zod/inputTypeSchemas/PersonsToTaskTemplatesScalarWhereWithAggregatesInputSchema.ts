import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PersonsToTaskTemplatesScalarWhereWithAggregatesInputSchema;
