import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PrivateEnergiesToTasksScalarWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTasksScalarWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrivateEnergiesToTasksScalarWhereInputSchema;
