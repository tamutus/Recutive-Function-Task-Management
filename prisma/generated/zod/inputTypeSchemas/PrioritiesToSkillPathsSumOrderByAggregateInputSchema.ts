import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToSkillPathsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsSumOrderByAggregateInput> = z.object({
  skillPathId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToSkillPathsSumOrderByAggregateInputSchema;
