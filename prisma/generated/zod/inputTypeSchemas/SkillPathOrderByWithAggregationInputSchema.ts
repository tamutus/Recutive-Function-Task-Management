import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SkillPathCountOrderByAggregateInputSchema } from './SkillPathCountOrderByAggregateInputSchema';
import { SkillPathAvgOrderByAggregateInputSchema } from './SkillPathAvgOrderByAggregateInputSchema';
import { SkillPathMaxOrderByAggregateInputSchema } from './SkillPathMaxOrderByAggregateInputSchema';
import { SkillPathMinOrderByAggregateInputSchema } from './SkillPathMinOrderByAggregateInputSchema';
import { SkillPathSumOrderByAggregateInputSchema } from './SkillPathSumOrderByAggregateInputSchema';

export const SkillPathOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillPathOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => SkillPathCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillPathAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillPathMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillPathMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillPathSumOrderByAggregateInputSchema).optional()
}).strict();

export default SkillPathOrderByWithAggregationInputSchema;
