import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectsToTagsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectsToTagsMaxOrderByAggregateInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectsToTagsMaxOrderByAggregateInputSchema;
