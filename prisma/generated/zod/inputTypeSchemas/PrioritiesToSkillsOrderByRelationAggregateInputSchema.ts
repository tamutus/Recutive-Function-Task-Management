import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrioritiesToSkillsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrioritiesToSkillsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrioritiesToSkillsOrderByRelationAggregateInputSchema;
