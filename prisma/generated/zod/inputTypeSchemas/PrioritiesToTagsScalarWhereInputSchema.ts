import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PrioritiesToTagsScalarWhereInputSchema: z.ZodType<Prisma.PrioritiesToTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToTagsScalarWhereInputSchema),z.lazy(() => PrioritiesToTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToTagsScalarWhereInputSchema),z.lazy(() => PrioritiesToTagsScalarWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToTagsScalarWhereInputSchema;
