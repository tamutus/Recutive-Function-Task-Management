import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PersonsToProjectTemplatesScalarWhereWithAggregatesInputSchema;
