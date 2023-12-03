import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PrivateEnergiesToPrivateTagsScalarWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsScalarWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsScalarWhereInputSchema;
