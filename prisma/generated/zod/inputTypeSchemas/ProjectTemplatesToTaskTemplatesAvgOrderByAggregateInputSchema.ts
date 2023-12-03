import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplatesToTaskTemplatesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesAvgOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesAvgOrderByAggregateInputSchema;
