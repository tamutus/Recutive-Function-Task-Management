import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillPathCountOrderByAggregateInputSchema: z.ZodType<Prisma.SkillPathCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillPathCountOrderByAggregateInputSchema;
