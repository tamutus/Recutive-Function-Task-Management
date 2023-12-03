import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillLinkSumOrderByAggregateInputSchema: z.ZodType<Prisma.SkillLinkSumOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  hourGate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillLinkSumOrderByAggregateInputSchema;
