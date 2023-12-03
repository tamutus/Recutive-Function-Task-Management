import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToSkillPathsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsMaxOrderByAggregateInput> = z.object({
  skillPathId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToSkillPathsMaxOrderByAggregateInputSchema;
