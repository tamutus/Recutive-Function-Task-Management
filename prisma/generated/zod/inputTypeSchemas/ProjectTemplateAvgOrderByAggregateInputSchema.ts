import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectTemplateAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplateAvgOrderByAggregateInputSchema;
