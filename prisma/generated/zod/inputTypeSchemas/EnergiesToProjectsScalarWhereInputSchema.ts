import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';

export const EnergiesToProjectsScalarWhereInputSchema: z.ZodType<Prisma.EnergiesToProjectsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToProjectsScalarWhereInputSchema),z.lazy(() => EnergiesToProjectsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToProjectsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToProjectsScalarWhereInputSchema),z.lazy(() => EnergiesToProjectsScalarWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  links: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export default EnergiesToProjectsScalarWhereInputSchema;
