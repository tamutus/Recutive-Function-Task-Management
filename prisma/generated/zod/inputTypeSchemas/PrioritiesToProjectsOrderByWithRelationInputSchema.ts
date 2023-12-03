import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { PriorityOrderByWithRelationInputSchema } from './PriorityOrderByWithRelationInputSchema';

export const PrioritiesToProjectsOrderByWithRelationInputSchema: z.ZodType<Prisma.PrioritiesToProjectsOrderByWithRelationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  priority: z.lazy(() => PriorityOrderByWithRelationInputSchema).optional()
}).strict();

export default PrioritiesToProjectsOrderByWithRelationInputSchema;
