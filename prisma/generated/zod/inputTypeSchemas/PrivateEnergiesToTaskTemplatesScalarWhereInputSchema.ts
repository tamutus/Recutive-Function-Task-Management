import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PrivateEnergiesToTaskTemplatesScalarWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskTemplatesScalarWhereInputSchema;
