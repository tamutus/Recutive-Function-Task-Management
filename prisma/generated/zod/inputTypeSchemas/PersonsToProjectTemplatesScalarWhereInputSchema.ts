import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PersonsToProjectTemplatesScalarWhereInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PersonsToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PersonsToProjectTemplatesScalarWhereInputSchema;
