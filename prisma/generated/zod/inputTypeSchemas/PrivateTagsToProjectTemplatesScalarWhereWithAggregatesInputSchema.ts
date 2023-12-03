import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  privateTagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesScalarWhereWithAggregatesInputSchema;
