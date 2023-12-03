import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const EnergiesToProjectTemplatesScalarWhereInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema),z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema),z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default EnergiesToProjectTemplatesScalarWhereInputSchema;
