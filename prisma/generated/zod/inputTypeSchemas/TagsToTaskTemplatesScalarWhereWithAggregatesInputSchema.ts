import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default TagsToTaskTemplatesScalarWhereWithAggregatesInputSchema;
