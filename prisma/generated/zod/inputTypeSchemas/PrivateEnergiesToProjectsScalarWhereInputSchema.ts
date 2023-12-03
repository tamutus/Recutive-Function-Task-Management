import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PrivateEnergiesToProjectsScalarWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectsScalarWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrivateEnergiesToProjectsScalarWhereInputSchema;
