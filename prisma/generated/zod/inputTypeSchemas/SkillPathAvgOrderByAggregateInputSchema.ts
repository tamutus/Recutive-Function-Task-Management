import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillPathAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SkillPathAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillPathAvgOrderByAggregateInputSchema;
