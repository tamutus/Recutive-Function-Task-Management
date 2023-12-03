import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToSkillPathsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsAvgOrderByAggregateInput> = z.object({
  skillPathId: z.lazy(() => SortOrderSchema).optional(),
  priorityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToSkillPathsAvgOrderByAggregateInputSchema;
