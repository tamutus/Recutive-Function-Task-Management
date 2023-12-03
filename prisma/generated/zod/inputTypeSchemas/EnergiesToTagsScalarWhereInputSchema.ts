import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const EnergiesToTagsScalarWhereInputSchema: z.ZodType<Prisma.EnergiesToTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToTagsScalarWhereInputSchema),z.lazy(() => EnergiesToTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToTagsScalarWhereInputSchema),z.lazy(() => EnergiesToTagsScalarWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default EnergiesToTagsScalarWhereInputSchema;
