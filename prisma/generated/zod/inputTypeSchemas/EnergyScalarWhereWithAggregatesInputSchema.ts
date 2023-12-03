import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';

export const EnergyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EnergyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EnergyScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergyScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  unit: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  music: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export default EnergyScalarWhereWithAggregatesInputSchema;
