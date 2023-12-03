import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SkillPathOrderByWithRelationInputSchema } from './SkillPathOrderByWithRelationInputSchema';
import { PriorityOrderByWithRelationInputSchema } from './PriorityOrderByWithRelationInputSchema';

export const PrioritiesToSkillPathsOrderByWithRelationInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsOrderByWithRelationInput> = z.object({
  skillPathId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  skillPath: z.lazy(() => SkillPathOrderByWithRelationInputSchema).optional(),
  priority: z.lazy(() => PriorityOrderByWithRelationInputSchema).optional()
}).strict();

export default PrioritiesToSkillPathsOrderByWithRelationInputSchema;
