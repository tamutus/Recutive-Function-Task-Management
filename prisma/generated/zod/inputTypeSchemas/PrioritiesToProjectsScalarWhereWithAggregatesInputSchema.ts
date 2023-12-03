import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PrioritiesToProjectsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrioritiesToProjectsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToProjectsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToProjectsScalarWhereWithAggregatesInputSchema;
