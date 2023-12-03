import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SkillCountOrderByAggregateInputSchema } from './SkillCountOrderByAggregateInputSchema';
import { SkillAvgOrderByAggregateInputSchema } from './SkillAvgOrderByAggregateInputSchema';
import { SkillMaxOrderByAggregateInputSchema } from './SkillMaxOrderByAggregateInputSchema';
import { SkillMinOrderByAggregateInputSchema } from './SkillMinOrderByAggregateInputSchema';
import { SkillSumOrderByAggregateInputSchema } from './SkillSumOrderByAggregateInputSchema';

export const SkillOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => SkillCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillSumOrderByAggregateInputSchema).optional()
}).strict();

export default SkillOrderByWithAggregationInputSchema;
