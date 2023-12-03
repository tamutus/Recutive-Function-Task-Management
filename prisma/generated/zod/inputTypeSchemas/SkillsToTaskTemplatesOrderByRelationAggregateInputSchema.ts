import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToTaskTemplatesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToTaskTemplatesOrderByRelationAggregateInputSchema;
