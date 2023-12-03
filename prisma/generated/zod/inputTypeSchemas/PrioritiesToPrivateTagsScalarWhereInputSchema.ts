import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PrioritiesToPrivateTagsScalarWhereInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => PrioritiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToPrivateTagsScalarWhereInputSchema;
