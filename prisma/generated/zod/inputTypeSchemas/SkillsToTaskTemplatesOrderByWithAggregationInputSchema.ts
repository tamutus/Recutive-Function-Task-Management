import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SkillsToTaskTemplatesCountOrderByAggregateInputSchema } from './SkillsToTaskTemplatesCountOrderByAggregateInputSchema';
import { SkillsToTaskTemplatesAvgOrderByAggregateInputSchema } from './SkillsToTaskTemplatesAvgOrderByAggregateInputSchema';
import { SkillsToTaskTemplatesMaxOrderByAggregateInputSchema } from './SkillsToTaskTemplatesMaxOrderByAggregateInputSchema';
import { SkillsToTaskTemplatesMinOrderByAggregateInputSchema } from './SkillsToTaskTemplatesMinOrderByAggregateInputSchema';
import { SkillsToTaskTemplatesSumOrderByAggregateInputSchema } from './SkillsToTaskTemplatesSumOrderByAggregateInputSchema';

export const SkillsToTaskTemplatesOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesOrderByWithAggregationInput> = z.object({
  taskId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SkillsToTaskTemplatesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillsToTaskTemplatesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillsToTaskTemplatesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillsToTaskTemplatesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillsToTaskTemplatesSumOrderByAggregateInputSchema).optional()
}).strict();

export default SkillsToTaskTemplatesOrderByWithAggregationInputSchema;
