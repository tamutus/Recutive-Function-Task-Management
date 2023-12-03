import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToSkillPathsSumOrderByAggregateInputSchema: z.ZodType<Prisma.SkillsToSkillPathsSumOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  skillPathId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToSkillPathsSumOrderByAggregateInputSchema;
