import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToSkillsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToSkillsSumOrderByAggregateInput> = z.object({
  priorityId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToSkillsSumOrderByAggregateInputSchema;
