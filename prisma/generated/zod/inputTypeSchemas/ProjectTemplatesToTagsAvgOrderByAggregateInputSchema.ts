import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplatesToTagsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTagsAvgOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplatesToTagsAvgOrderByAggregateInputSchema;
