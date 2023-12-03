import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PersonsToProjectsScalarWhereInputSchema: z.ZodType<Prisma.PersonsToProjectsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToProjectsScalarWhereInputSchema),z.lazy(() => PersonsToProjectsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToProjectsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToProjectsScalarWhereInputSchema),z.lazy(() => PersonsToProjectsScalarWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  volunteerDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PersonsToProjectsScalarWhereInputSchema;
