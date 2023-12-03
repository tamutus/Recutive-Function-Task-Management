import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SkillsToTasksCountOrderByAggregateInputSchema } from './SkillsToTasksCountOrderByAggregateInputSchema';
import { SkillsToTasksAvgOrderByAggregateInputSchema } from './SkillsToTasksAvgOrderByAggregateInputSchema';
import { SkillsToTasksMaxOrderByAggregateInputSchema } from './SkillsToTasksMaxOrderByAggregateInputSchema';
import { SkillsToTasksMinOrderByAggregateInputSchema } from './SkillsToTasksMinOrderByAggregateInputSchema';
import { SkillsToTasksSumOrderByAggregateInputSchema } from './SkillsToTasksSumOrderByAggregateInputSchema';

export const SkillsToTasksOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillsToTasksOrderByWithAggregationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SkillsToTasksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillsToTasksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillsToTasksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillsToTasksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillsToTasksSumOrderByAggregateInputSchema).optional()
}).strict();

export default SkillsToTasksOrderByWithAggregationInputSchema;
