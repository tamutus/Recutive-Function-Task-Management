import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const ProjectsToTagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectsToTagsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectsToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectsToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectsToTagsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectsToTagsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectsToTagsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default ProjectsToTagsScalarWhereWithAggregatesInputSchema;
