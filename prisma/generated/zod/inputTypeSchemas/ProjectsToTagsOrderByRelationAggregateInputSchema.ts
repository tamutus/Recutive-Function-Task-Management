import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectsToTagsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectsToTagsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectsToTagsOrderByRelationAggregateInputSchema;
