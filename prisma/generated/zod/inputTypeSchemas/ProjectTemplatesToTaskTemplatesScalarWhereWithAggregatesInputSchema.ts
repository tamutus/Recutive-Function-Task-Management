import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';

export const ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  count: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  schedule: z.lazy(() => JsonWithAggregatesFilterSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesScalarWhereWithAggregatesInputSchema;
