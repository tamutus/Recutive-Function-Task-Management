import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplatesToTagsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsMaxOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplatesToTagsMaxOrderByAggregateInputSchema;
