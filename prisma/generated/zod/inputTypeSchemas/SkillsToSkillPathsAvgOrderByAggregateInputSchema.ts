import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToSkillPathsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SkillsToSkillPathsAvgOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  skillPathId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToSkillPathsAvgOrderByAggregateInputSchema;
