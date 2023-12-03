import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplatesToTagsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsMinOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplatesToTagsMinOrderByAggregateInputSchema;
