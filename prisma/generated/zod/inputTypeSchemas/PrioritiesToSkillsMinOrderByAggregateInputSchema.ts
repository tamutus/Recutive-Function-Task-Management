import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToSkillsMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToSkillsMinOrderByAggregateInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToSkillsMinOrderByAggregateInputSchema;
