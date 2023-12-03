import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplatesToTaskTemplatesCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCountOrderByAggregateInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  taskId: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  schedule: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesCountOrderByAggregateInputSchema;
