import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToSkillPathsCountOrderByAggregateInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCountOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  skillPathId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToSkillPathsCountOrderByAggregateInputSchema;
