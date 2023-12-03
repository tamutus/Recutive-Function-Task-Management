import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrivateEnergiesToProjectsScalarWhereWithAggregatesInputSchema;
