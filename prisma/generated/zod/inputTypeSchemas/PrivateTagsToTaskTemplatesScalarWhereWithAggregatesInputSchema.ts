import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateTagsToTaskTemplatesScalarWhereWithAggregatesInputSchema;
