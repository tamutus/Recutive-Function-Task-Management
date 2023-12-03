import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';

export const EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  links: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesScalarWhereWithAggregatesInputSchema;
