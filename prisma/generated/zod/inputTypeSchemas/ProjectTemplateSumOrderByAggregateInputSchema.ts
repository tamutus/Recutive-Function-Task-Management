import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectTemplateSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectTemplateSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectTemplateSumOrderByAggregateInputSchema;
