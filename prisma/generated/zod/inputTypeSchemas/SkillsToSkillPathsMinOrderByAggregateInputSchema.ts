import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToSkillPathsMinOrderByAggregateInputSchema: z.ZodType<Prisma.SkillsToSkillPathsMinOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  skillPathId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToSkillPathsMinOrderByAggregateInputSchema;
