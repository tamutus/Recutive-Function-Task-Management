import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectsToTasksOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectsToTasksOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectsToTasksOrderByRelationAggregateInputSchema;
