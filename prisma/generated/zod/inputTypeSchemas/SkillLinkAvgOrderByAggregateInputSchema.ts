import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillLinkAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SkillLinkAvgOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  hourGate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillLinkAvgOrderByAggregateInputSchema;
