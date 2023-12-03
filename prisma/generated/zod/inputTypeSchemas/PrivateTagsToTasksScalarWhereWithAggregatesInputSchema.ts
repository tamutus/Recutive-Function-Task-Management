import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PrivateTagsToTasksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateTagsToTasksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagsToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateTagsToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToTasksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToTasksScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateTagsToTasksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateTagsToTasksScalarWhereWithAggregatesInputSchema;
