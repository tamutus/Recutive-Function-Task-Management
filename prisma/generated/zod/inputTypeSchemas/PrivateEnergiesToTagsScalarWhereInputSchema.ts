import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PrivateEnergiesToTagsScalarWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToTagsScalarWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateEnergiesToTagsScalarWhereInputSchema;
