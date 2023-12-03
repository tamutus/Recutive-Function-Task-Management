import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PersonsToTagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonsToTagsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToTagsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  followerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PersonsToTagsScalarWhereWithAggregatesInputSchema;
