import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const EnergiesToPrivateTagsScalarWhereInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default EnergiesToPrivateTagsScalarWhereInputSchema;
