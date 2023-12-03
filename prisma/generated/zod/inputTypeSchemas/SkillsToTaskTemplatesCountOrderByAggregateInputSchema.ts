import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToTaskTemplatesCountOrderByAggregateInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCountOrderByAggregateInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToTaskTemplatesCountOrderByAggregateInputSchema;
