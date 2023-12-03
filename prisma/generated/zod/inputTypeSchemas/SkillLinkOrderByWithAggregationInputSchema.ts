import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SkillLinkCountOrderByAggregateInputSchema } from './SkillLinkCountOrderByAggregateInputSchema';
import { SkillLinkAvgOrderByAggregateInputSchema } from './SkillLinkAvgOrderByAggregateInputSchema';
import { SkillLinkMaxOrderByAggregateInputSchema } from './SkillLinkMaxOrderByAggregateInputSchema';
import { SkillLinkMinOrderByAggregateInputSchema } from './SkillLinkMinOrderByAggregateInputSchema';
import { SkillLinkSumOrderByAggregateInputSchema } from './SkillLinkSumOrderByAggregateInputSchema';

export const SkillLinkOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillLinkOrderByWithAggregationInput> = z.object({
  precursorId: z.lazy(() => SortOrderSchema).optional(),
  successorId: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  hourGate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SkillLinkCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillLinkAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillLinkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillLinkMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillLinkSumOrderByAggregateInputSchema).optional()
}).strict();

export default SkillLinkOrderByWithAggregationInputSchema;
