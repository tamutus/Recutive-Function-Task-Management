import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PriorityOrderByWithRelationInputSchema } from './PriorityOrderByWithRelationInputSchema';
import { SkillOrderByWithRelationInputSchema } from './SkillOrderByWithRelationInputSchema';

export const PrioritiesToSkillsOrderByWithRelationInputSchema: z.ZodType<Prisma.PrioritiesToSkillsOrderByWithRelationInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  priority: z.lazy(() => PriorityOrderByWithRelationInputSchema).optional(),
  skill: z.lazy(() => SkillOrderByWithRelationInputSchema).optional()
}).strict();

export default PrioritiesToSkillsOrderByWithRelationInputSchema;
