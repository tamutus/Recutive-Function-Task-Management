import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema';
import { PriorityOrderByWithRelationInputSchema } from './PriorityOrderByWithRelationInputSchema';

export const PrioritiesToTagsOrderByWithRelationInputSchema: z.ZodType<Prisma.PrioritiesToTagsOrderByWithRelationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional(),
  priority: z.lazy(() => PriorityOrderByWithRelationInputSchema).optional()
}).strict();

export default PrioritiesToTagsOrderByWithRelationInputSchema;
