import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillPathSumOrderByAggregateInputSchema: z.ZodType<Prisma.SkillPathSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillPathSumOrderByAggregateInputSchema;
