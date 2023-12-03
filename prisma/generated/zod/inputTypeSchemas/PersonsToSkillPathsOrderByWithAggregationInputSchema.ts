import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PersonsToSkillPathsCountOrderByAggregateInputSchema } from './PersonsToSkillPathsCountOrderByAggregateInputSchema';
import { PersonsToSkillPathsAvgOrderByAggregateInputSchema } from './PersonsToSkillPathsAvgOrderByAggregateInputSchema';
import { PersonsToSkillPathsMaxOrderByAggregateInputSchema } from './PersonsToSkillPathsMaxOrderByAggregateInputSchema';
import { PersonsToSkillPathsMinOrderByAggregateInputSchema } from './PersonsToSkillPathsMinOrderByAggregateInputSchema';
import { PersonsToSkillPathsSumOrderByAggregateInputSchema } from './PersonsToSkillPathsSumOrderByAggregateInputSchema';

export const PersonsToSkillPathsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonsToSkillPathsOrderByWithAggregationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PersonsToSkillPathsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PersonsToSkillPathsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonsToSkillPathsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonsToSkillPathsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PersonsToSkillPathsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PersonsToSkillPathsOrderByWithAggregationInputSchema;
