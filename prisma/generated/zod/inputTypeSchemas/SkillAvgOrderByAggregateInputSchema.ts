import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SkillAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillAvgOrderByAggregateInputSchema;
