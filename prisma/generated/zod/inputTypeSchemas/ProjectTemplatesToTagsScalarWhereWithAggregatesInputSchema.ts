import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default ProjectTemplatesToTagsScalarWhereWithAggregatesInputSchema;
