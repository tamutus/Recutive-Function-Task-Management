import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PrioritiesToProjectsScalarWhereInputSchema: z.ZodType<Prisma.PrioritiesToProjectsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema),z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema),z.lazy(() => PrioritiesToProjectsScalarWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToProjectsScalarWhereInputSchema;
