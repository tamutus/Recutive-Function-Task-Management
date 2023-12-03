import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrivateEnergiesToTasksScalarWhereWithAggregatesInputSchema;
