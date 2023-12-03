import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const EnergiesToTasksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EnergiesToTasksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToTasksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default EnergiesToTasksScalarWhereWithAggregatesInputSchema;
