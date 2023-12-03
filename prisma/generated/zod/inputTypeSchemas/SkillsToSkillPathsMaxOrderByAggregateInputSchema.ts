import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToSkillPathsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SkillsToSkillPathsMaxOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  skillPathId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToSkillPathsMaxOrderByAggregateInputSchema;
