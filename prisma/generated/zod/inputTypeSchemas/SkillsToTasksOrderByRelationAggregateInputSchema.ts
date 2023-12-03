import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToTasksOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SkillsToTasksOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToTasksOrderByRelationAggregateInputSchema;