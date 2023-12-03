import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrivateTagOrderByWithRelationInputSchema } from './PrivateTagOrderByWithRelationInputSchema';
import { PriorityOrderByWithRelationInputSchema } from './PriorityOrderByWithRelationInputSchema';

export const PrioritiesToPrivateTagsOrderByWithRelationInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsOrderByWithRelationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tag: z.lazy(() => PrivateTagOrderByWithRelationInputSchema).optional(),
  priority: z.lazy(() => PriorityOrderByWithRelationInputSchema).optional()
}).strict();

export default PrioritiesToPrivateTagsOrderByWithRelationInputSchema;
