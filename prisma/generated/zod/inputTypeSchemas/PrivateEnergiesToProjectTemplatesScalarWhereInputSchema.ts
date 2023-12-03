import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PrivateEnergiesToProjectTemplatesScalarWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesScalarWhereInputSchema;
