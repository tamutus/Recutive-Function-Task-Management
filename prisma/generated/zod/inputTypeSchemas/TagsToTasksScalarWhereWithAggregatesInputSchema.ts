import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const TagsToTasksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TagsToTasksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TagsToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsToTasksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default TagsToTasksScalarWhereWithAggregatesInputSchema;
