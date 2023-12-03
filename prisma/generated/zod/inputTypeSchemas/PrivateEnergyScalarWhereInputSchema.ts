import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';

export const PrivateEnergyScalarWhereInputSchema: z.ZodType<Prisma.PrivateEnergyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergyScalarWhereInputSchema),z.lazy(() => PrivateEnergyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergyScalarWhereInputSchema),z.lazy(() => PrivateEnergyScalarWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unit: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  music: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export default PrivateEnergyScalarWhereInputSchema;
