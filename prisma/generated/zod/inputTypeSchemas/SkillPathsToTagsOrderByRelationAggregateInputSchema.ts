import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SkillPathsToTagsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SkillPathsToTagsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SkillPathsToTagsOrderByRelationAggregateInputSchema;
