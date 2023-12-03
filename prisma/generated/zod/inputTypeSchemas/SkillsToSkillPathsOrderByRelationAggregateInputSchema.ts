import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillsToSkillPathsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SkillsToSkillPathsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillsToSkillPathsOrderByRelationAggregateInputSchema;
