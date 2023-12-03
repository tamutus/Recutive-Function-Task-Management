import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToTaskTemplatesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesAvgOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToTaskTemplatesAvgOrderByAggregateInputSchema;
