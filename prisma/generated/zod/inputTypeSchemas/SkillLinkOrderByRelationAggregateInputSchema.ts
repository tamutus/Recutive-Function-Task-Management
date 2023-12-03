import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillLinkOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SkillLinkOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillLinkOrderByRelationAggregateInputSchema;
