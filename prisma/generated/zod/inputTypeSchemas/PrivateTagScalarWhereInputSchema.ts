import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const PrivateTagScalarWhereInputSchema: z.ZodType<Prisma.PrivateTagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagScalarWhereInputSchema),z.lazy(() => PrivateTagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagScalarWhereInputSchema),z.lazy(() => PrivateTagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nsfw: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateTagScalarWhereInputSchema;
