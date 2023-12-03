import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  info: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default EnergiesToProjectTemplatesScalarWhereWithAggregatesInputSchema;
