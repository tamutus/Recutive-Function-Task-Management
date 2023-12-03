import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplatesToTaskTemplatesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesMaxOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesMaxOrderByAggregateInputSchema;
