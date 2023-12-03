import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';

export const EnergiesToTaskTemplatesScalarWhereInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => EnergiesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  links: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export default EnergiesToTaskTemplatesScalarWhereInputSchema;
