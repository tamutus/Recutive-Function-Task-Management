import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PersonsToTagsScalarWhereInputSchema: z.ZodType<Prisma.PersonsToTagsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToTagsScalarWhereInputSchema),z.lazy(() => PersonsToTagsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToTagsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToTagsScalarWhereInputSchema),z.lazy(() => PersonsToTagsScalarWhereInputSchema).array() ]).optional(),
  followerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PersonsToTagsScalarWhereInputSchema;
