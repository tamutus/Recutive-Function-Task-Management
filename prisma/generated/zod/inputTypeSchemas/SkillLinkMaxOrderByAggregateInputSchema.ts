import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillLinkMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SkillLinkMaxOrderByAggregateInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  info: z.lazy(() => SortOrderSchema).optional(),
  hourGate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillLinkMaxOrderByAggregateInputSchema;
