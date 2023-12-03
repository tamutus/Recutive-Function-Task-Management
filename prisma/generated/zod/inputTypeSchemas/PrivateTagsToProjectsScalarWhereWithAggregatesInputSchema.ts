import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateTagsToProjectsScalarWhereWithAggregatesInputSchema;
