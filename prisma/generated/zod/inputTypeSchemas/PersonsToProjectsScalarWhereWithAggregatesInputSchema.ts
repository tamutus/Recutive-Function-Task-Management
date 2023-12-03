import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const PersonsToProjectsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonsToProjectsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToProjectsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  volunteerDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PersonsToProjectsScalarWhereWithAggregatesInputSchema;
