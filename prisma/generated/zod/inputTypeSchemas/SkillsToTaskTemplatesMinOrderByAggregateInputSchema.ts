import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToTaskTemplatesMinOrderByAggregateInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesMinOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToTaskTemplatesMinOrderByAggregateInputSchema;
