import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const PriorityScalarWhereInputSchema: z.ZodType<Prisma.PriorityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PriorityScalarWhereInputSchema),z.lazy(() => PriorityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PriorityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PriorityScalarWhereInputSchema),z.lazy(() => PriorityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PriorityScalarWhereInputSchema;
